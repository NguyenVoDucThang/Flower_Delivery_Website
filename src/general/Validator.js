

const Validator = (formSelector, option ={}) => {

    function getParent(element, selector) {

        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }

    }

    var formRules = {};

    // Quy ước tạo rules
    // Nếu có lỗi thì return  'error message'
    // Nếu không có lỗi thì return 'undefined'

    var ValidatorRules = {
        required: function (value) {
            return value ? undefined : 'Please enter this field'
        },
        email: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Please enter your email address'
        },
        min: function (min) {
            return function (value) {
                return value.length >= min ? undefined : 'Please enter at least 6 characters'
            }
        },
        number: function (value) {
            return !isNaN(value) ? undefined : 'OTP contains only numeric characters'
        },
    }

    // Lấy ra form element trong dom
    var formElement = document.querySelector(formSelector);


    // Chỉ xử lý khi có element trong dom
    if (formElement) {

        var inputs = formElement.querySelectorAll('[name][rules]');
        for (var input of inputs) {
            var rules = input.getAttribute('rules').split('|');
            for (var rule of rules) {
                var ruleInfo;
                var isRulesHasValue = rule.includes(':');
                if (isRulesHasValue) {
                    ruleInfo = rule.split(':');
                    rule = ruleInfo[0];
                }
                var ruleFunc = ValidatorRules[rule]
                if (isRulesHasValue) {
                    ruleFunc = ruleFunc(ruleInfo[1]);
                }
                // console.log(rule);
                if (Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc);
                }
                else {
                    formRules[input.name] = [ruleFunc];
                }
            }

            // Lắng nghe sự kiện để validate (blur, change, ...)
            input.onblur = handleValidate;

            input.oninput = handleClearError;
        }

        // Hàm thực hiện validate
        function handleValidate(e) {
            var rules = formRules[e.target.name];
            var errorMessage;

            for (var rule of rules) {
                errorMessage = rule(e.target.value);
                if (errorMessage) break;
            }
            // Nếu có lỗi thì hiển thị ra UI
            if (errorMessage) {
                var formGroup = getParent(e.target, '.auth-form__group');
                if (formGroup) {
                    formGroup.classList.add('invalid');
                    var formMesages = formGroup.querySelector('.form-message');
                    if (formMesages) {
                        formMesages.innerText = errorMessage;
                    }
                }
            }
            return !errorMessage;

        }
        // Hàm xóa message Lỗi
        function handleClearError(e) {
            var formGroup = getParent(e.target, '.auth-form__group');
            if (formGroup.classList.contains('invalid')) {
                formGroup.classList.remove('invalid')
            }
            var formMesages = formGroup.querySelector('.form-message');
            if (formMesages) {
                formMesages.innerText = '';
            }
        }

        // Xử lý hành vi submit form 
        formElement.onsubmit = function(e) {
            e.preventDefault();

            var isValid = true;

            var inputs = formElement.querySelectorAll('[name][rules]');
            for (var input of inputs) {
                if (!handleValidate({target: input})) {
                    isValid = false;
                }
            }
            // Khi không lỗi thì submit form
            if (isValid) {

                // if (option.onSubmit==='function') {

                    var enableInputs = formElement.querySelectorAll('[name]');
                    var formValues = Array.from(enableInputs).reduce(function (values, input) {
                        values[input.name] = input.value;
                        return values;
                    }, {});
                    option.onSubmit(formValues);
                // }
                // else {
                //     formElement.submit();
                // }
            }

        }
        // console.log(formRules);
    }
}

export default Validator