
import './styles/main.scss';

function Documentation() {
    const hamBurger = document.querySelector(".toggle-btn");

    hamBurger.addEventListener("click", function () {
        document.querySelector("#sidebar").classList.toggle("expand");
    });
}

import logo1 from './assets/logo/logo-1.png';

const logoItem = document.querySelector('.toggle-btn img');

logoItem.src = logo1;



Documentation()