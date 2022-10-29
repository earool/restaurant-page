import { loadHeader, loadMainContainer, loadMainHome } from './home.js';
import loadMainMenu from './menu.js';

loadHeader();
const main = loadMainContainer();
loadMainHome(main);
tabManager();






function tabManager() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab) => {
        tab.addEventListener('click', (e) => {
            switch(e.target.getAttribute('data-tab')) {
                case 'Home':
                    main.innerHTML = '';
                    loadMainHome(main);
                    break;
                case 'Menu':
                    main.innerHTML = '';
                    loadMainMenu(main);
                    break;
                case 'Contact':
                    alert('This button does\'t work yet!');
                    break;
            }
            // console.log(e.target);
        })
    })
};

