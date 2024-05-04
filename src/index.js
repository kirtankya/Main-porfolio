
import '../src/styles/main.scss';
import Main from './about';
import Project from './project';
import service from './service';
import Work from './work';
import work from './service_work';
import blog from './blog';
import Blog_detail from './blog_detail';



// logo-define //
import logo from './assets/logo/Logo.png';

const logoItem = document.querySelector('.navbar-brand img');
logoItem.src = logo;

import dribble from './assets/icons/icon.png';
import microSoft from './assets/icons/icon-1.png';
import spotify from './assets/icons/spotify.png';
import medium from './assets/icons/medium.png';
import thumbrl from './assets/icons/tumblr.png';
import google from './assets/icons/google.png';

const iconItems = document.querySelectorAll('.herobanner-logo-box img');

if (iconItems.length > 0) {
    iconItems[0].src = dribble;
}

if (iconItems.length > 1) {
    iconItems[1].src = microSoft;
}

if (iconItems.length > 2) {
    iconItems[2].src = spotify;
}

if (iconItems.length > 3) {
    iconItems[3].src = medium;
}

if (iconItems.length > 4) {
    iconItems[4].src = thumbrl;
}

if (iconItems.length > 5) {
    iconItems[5].src = google;
}

import person from './assets/icons/person.png';

const man = document.querySelector('.herobanner-box-1 .icon img');
man.src = person;

import award from './assets/icons/award.png';

const awardIcon = document.querySelector('.herobanner-box .icon img');
awardIcon.src = award;

import ui from './assets/icons/Group.png';
import mobile from './assets/icons/mobile-1.png';
import webDesign from './assets/icons/web-design 1.png';

const ServiceIcon = document.querySelectorAll('.service-text-box img');

if (ServiceIcon.length > 0) {
    ServiceIcon[0].src = ui;
}

if (ServiceIcon.length > 1) {
    ServiceIcon[1].src = mobile;
}

if (ServiceIcon.length > 2) {
    ServiceIcon[2].src = webDesign;
}

import profile from './assets/icons/i.png';
import profile1 from './assets/icons/i-1.png';
import profile2 from './assets/icons/i-2.png';


const profileIcon = document.querySelectorAll('.client-testiomal-box .profile img');

if (profileIcon.length > 0) {
    profileIcon[0].src = profile;
}
if (profileIcon.length > 1) {
    profileIcon[1].src = profile1;
}
if (profileIcon.length > 2) {
    profileIcon[2].src = profile2;
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








console.log(Main())
console.log(Project());
console.log(Work());
console.log(service());
console.log(work());
console.log(blog());
console.log(Blog_detail());

