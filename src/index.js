import { loadHeader, loadMainContainer, loadMainHome } from './home.js';
import loadMainMenu from './menu.js';

loadHeader();
const main = loadMainContainer();
loadMainHome(main);
// tabManager();






// function tabManager() {
//     const tabs = document.querySelectorAll('.tab');
//     tabs.forEach((tab) => {
//         tab.addEventListener('click', (e) => {
//             switch(tab.target.getAttribute('data-tab')) {
//                 case 'Home':
//                     main.innerHTML = '';
//                     loadMainHome(main);
//                     break;
//                 case 'Menu':
//                     main.innerHTML = '';
//                     loadMainHome(main);
//                 case 'Contact':
//                     alert('This button does\'t work yet!');
//                     break;
//             }
//         })
//     })
// };

