import './styles/main.scss';

function Work() {
    return 'hello work'
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

export default Work;