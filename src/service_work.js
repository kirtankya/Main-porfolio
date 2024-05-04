import './styles/main.scss';

function work() {
    return 'service work'
}

function loading() {
    var loadingWrapper = document.getElementById("loading-wrapper");
    var wrapper = document.getElementById("wrapper");
    if (loadingWrapper && wrapper) {
        setTimeout(function () {
            loadingWrapper.classList.add("hidden");
            wrapper.classList.remove("hidden");
        }, 2000);
    } else {
        console.error("One or both of the elements not found.");
    }
}

loading();

import logo from './assets/logo/Logo.png';

const logoItem = document.querySelector('.navbar-brand img');
logoItem.src = logo;

import design from './assets/icons/design.png';

const serviceIcon = document.querySelectorAll('.service-icon img');

if (serviceIcon.length > 0) {
    serviceIcon[0].src = design;
}

import figma from './assets/icons/figma.png';
import photoshop from './assets/icons/photoshop.png';
import xd from './assets/icons/xd.png';
import notion from './assets/icons/notion.png';


const iconItem = document.querySelectorAll('.ui-design img');

if (iconItem.length > 0) {
    iconItem[0].src = figma;
}
if (iconItem.length > 1) {
    iconItem[1].src = photoshop;
}
if (iconItem.length > 2) {
    iconItem[2].src = xd;
}
if (iconItem.length > 3) {
    iconItem[3].src = notion;
}

import hand from './assets/icons/hand.png';
import pen from './assets/icons/pen.png';
import computer from './assets/icons/computer.png';
import thumbh from './assets/icons/thumb.png';

const workIcon = document.querySelectorAll('.work-box .work-item img');

if (workIcon.length > 0) {
    workIcon[0].src = hand;
}
if (workIcon.length > 1) {
    workIcon[1].src = pen;
}
if (workIcon.length > 2) {
    workIcon[2].src = computer;
}
if (workIcon.length > 3) {
    workIcon[3].src = thumbh;
}

function BackToTop() {
    // Back to top
    var amountScrolled = 200;
    var amountScrolledNav = 25;

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > amountScrolled) {
            document.querySelector('button.back-to-top').classList.add('show');
        } else {
            document.querySelector('button.back-to-top').classList.remove('show');
        }
    });

    document.querySelector('button.back-to-top').addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

}
BackToTop();

export default work;