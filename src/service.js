import './styles/main.scss';

function service() {
    return 'hello everyone';
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

import slack from './assets/icons/slack.png';
import figma from './assets/icons/figma.png';
import sketch from './assets/icons/sketch.png';
import photoshop from './assets/icons/photoshop.png';
import ai from './assets/icons/ai.png';
import xd from './assets/icons/xd.png';
import notion from './assets/icons/notion.png';
import webflow1 from './assets/icons/webflow.png';

const iconItem = document.querySelectorAll('.tools-box img');

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
    iconItem[7].src = webflow1;
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

import spotify from './assets/icons/spotify.png';
import coinbase from './assets/icons/coinbase.png';
import slack1 from './assets/icons/slack1.png';
import gong from './assets/icons/gong.png';
import asana from './assets/icons/asana.png';
import maze from './assets/icons/maze.png';
import dropbox from './assets/icons/drop.png';
import webflow2 from './assets/icons/webflow1.png';
import zoom from './assets/icons/zoom.png';
import descript from './assets/icons/descript.png';
import discord1 from './assets/icons/discord.png';
import dribbble from './assets/icons/dri.png';

const worldIcons = document.querySelectorAll('.companay-logo .spotify img');

if (worldIcons.length > 0) {
    worldIcons[0].src = spotify;
}
if (worldIcons.length > 1) {
    worldIcons[1].src = coinbase;
}
if (worldIcons.length > 2) {
    worldIcons[2].src = slack1;
}
if (worldIcons.length > 3) {
    worldIcons[3].src = gong;
}
if (worldIcons.length > 4) {
    worldIcons[4].src = asana;
}
if (worldIcons.length > 5) {
    worldIcons[5].src = maze;
}
if (worldIcons.length > 6) {
    worldIcons[6].src = dropbox;
}
if (worldIcons.length > 7) {
    worldIcons[7].src = webflow2;
}
if (worldIcons.length > 8) {
    worldIcons[8].src = zoom;
}
if (worldIcons.length > 9) {
    worldIcons[9].src = descript;
}
if (worldIcons.length > 10) {
    worldIcons[10].src = discord1;
}
if (worldIcons.length > 11) {
    worldIcons[11].src = dribbble;
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

export default service;