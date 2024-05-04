import './styles/main.scss';



function Main() {
    return "kirtan"
}

import logo from './assets/logo/Logo.png';

const logoItem = document.querySelector('.navbar-brand img');
logoItem.src = logo;


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



import slack from './assets/icons/slack.png';
import figma from './assets/icons/figma.png';
import sketch from './assets/icons/sketch.png';
import photoshop from './assets/icons/photoshop.png';
import ai from './assets/icons/ai.png';
import xd from './assets/icons/xd.png';
import notion from './assets/icons/notion.png';
import webflow from './assets/icons/webflow.png';

const iconItem = document.querySelectorAll('.about-tools-box img');

if (iconItem.length > 0) {
    iconItem[0].src = slack;
}
if (iconItem.length > 1) {
    iconItem[1].src = figma;
}
if (iconItem.length > 2) {
    iconItem[2].src = sketch;
}
if (iconItem.length > 3) {
    iconItem[3].src = photoshop;
}
if (iconItem.length > 4) {
    iconItem[4].src = ai;
}
if (iconItem.length > 5) {
    iconItem[5].src = xd;
}
if (iconItem.length > 6) {
    iconItem[6].src = notion;
}
if (iconItem.length > 7) {
    iconItem[7].src = webflow;
}


import design from './assets/icons/design.png';
import market from './assets/icons/market.png';
import devolpment from './assets/icons/dev.png';
import writing from './assets/icons/writing.png';

const serviceIcon = document.querySelectorAll('.service-icon img');

if (serviceIcon.length > 0) {
    serviceIcon[0].src = design;
}
if (serviceIcon.length > 1) {
    serviceIcon[1].src = market;
}
if (serviceIcon.length > 2) {
    serviceIcon[2].src = devolpment;
}
if (serviceIcon.length > 3) {
    serviceIcon[3].src = writing;
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


export default Main;