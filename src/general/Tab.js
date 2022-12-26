import React from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Tab = (props) => {
  var { state } = useLocation();
  var { username } = state || {};
  const navigate = useNavigate();

  setTimeout(() => {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const tabs = $$('.tab__item');
    tabs.forEach((tab, index) => {
      tab.onclick = function () {

        if (index ===0) {
          navigate('/shopping', {
            state: {
                username: username,
            }
        });
        }
        if(index === 1) {
          navigate('/teddy', {
            state: {
                username: username,
            }
        });
        }
        if(index === 2) {
          navigate('/giftbox', {
            state: {
                username: username,
            }
        });
        }
        if(index === 3) {
          navigate('/love', {
            state: {
                username: username,
            }
        });
        }
        // $('.tab__item.active').classList.remove('active');
        // tabs[1].classList.add('active');
      }
    })
    if (props.index == 1){
      tabs.forEach((tab, index) => {
          $('.tab__item.active').classList.remove('active');
          tabs[1].classList.add('active');
      })
    }
    else if (props.index == 2){
      tabs.forEach((tab, index) => {
        $('.tab__item.active').classList.remove('active');
        tabs[2].classList.add('active');
    })
    }
    else if (props.index == 3){
      tabs.forEach((tab, index) => {
        $('.tab__item.active').classList.remove('active');
        tabs[3].classList.add('active');
    })
    }else {
      tabs.forEach((tab, index) => {
        $('.tab__item.active').classList.remove('active');
        tabs[0].classList.add('active');
    })
    }

  },
    10)
  return (
    <div className="homepage_tabs">
      <div className="tab__item active">FLOWER</div>
      <div className="tab__item">TEDDY</div>
      <div className="tab__item">GIFTBOX</div>
      <div className="tab__item">LOVE</div>
    </div>

  )
}

export default Tab