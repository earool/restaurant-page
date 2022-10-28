import loadHomePage from './home.js';

function tabManager() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab) => {
        tab.addEventListener('click', (e) => {
            console.log(e.target);
        })
    })
};


loadHomePage();
tabManager();
