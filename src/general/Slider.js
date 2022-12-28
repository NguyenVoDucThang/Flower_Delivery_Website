import React from 'react'

const Slider = () => {
    setTimeout(() => {
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);
        let slideIndex = 0;
            showSlides();
            let slides = $$('.homepage_slider');
            let dots = $$('.dot');
    
            dots.forEach((dot, index) => {
    
                dot.onclick = function () {
                    for (var i = 0; i < dots.length; i++) {
                        slides[i].style.display = "none";
                    }
                    for (var i = 0; i < dots.length; i++) {
                        dots[i].className = dots[i].className.replace("active_dot", "");
                    }
                    slides[index].style.display = "block";
                    dots[index].className += " active_dot ";
                    slideIndex = index
                }
            })
            function showSlides() {
                let i;
                let slides = document.getElementsByClassName("homepage_slider");
                let dots = document.getElementsByClassName("dot");
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                slideIndex++;
                if (slideIndex > slides.length) { slideIndex = 1 }
                for (i = 0; i < dots.length; i++) {
                    dots[i].classList.remove("active_dot");
                }
                slides[slideIndex - 1].style.display = "block";
                dots[slideIndex - 1].className += " active_dot";
                setTimeout(showSlides, 4000);
            }
    }, 10);
    
    return (
            <div className="grid wide">
                <hr/>
                <div className="slider__container">
                    <div className="homepage_slider fade">
                        <div className="slider__img1"></div>
                    </div>
                    <div className="homepage_slider fade">
                        <div className="slider__img2"></div>
                    </div>
                    <div className="homepage_slider fade">
                        <div className="slider__img3"></div>
                    </div>
                </div>
                <div className="slider__icon">
                    <span className="dot active_dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
    )
}

export default Slider