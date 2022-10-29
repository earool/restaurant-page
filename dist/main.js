/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHeader": () => (/* binding */ loadHeader),
/* harmony export */   "loadMainContainer": () => (/* binding */ loadMainContainer),
/* harmony export */   "loadMainHome": () => (/* binding */ loadMainHome)
/* harmony export */ });
const content = document.querySelector('#content');
content.classList.add('content');

function loadHeader() {
    // header
    const header = document.createElement('header');
    header.classList.add('header', 'container',
     'round-corners', 'container-size');
    content.appendChild(header);
    
    const titleHeader = document.createElement('h1');
    titleHeader.innerText = 'Sweet-Longitudinal-Cylinders';
    header.appendChild(titleHeader);

    const tabContainer = document.createElement('div');
    tabContainer.classList.add('tab-container');
    header.appendChild(tabContainer);

    for (let i = 0; i < 3; i++) {
        const tabs = ['Home', 'Menu', 'Contact']
        const tab = document.createElement('div');
        tab.classList.add('tab');
        tab.setAttribute('data-tab', tabs[i]);
        tab.innerText = tabs[i];
        tabContainer.appendChild(tab);
    }
}

function loadMainContainer() {
    const main = document.createElement('main');
    main.classList.add('container-size', 'main');
    content.appendChild(main);
    return main;
}

function loadMainHome(main) {
    // submain - text
    main.classList.remove('menu-main');
    main.classList.add('main')
    const aboutMe = document.createElement('div');
    aboutMe.classList.add('container', 'round-corners', 'text')
    main.appendChild(aboutMe);
    
    const titleAbout = document.createElement('h3');
    titleAbout.innerText = 'Lorem Ipsum' ;
    aboutMe.appendChild(titleAbout);
    
    const textAbout = document.createElement('div');
    textAbout.innerText = 'Ut hendrerit, risus vitae porttitor vestibulum, purus justo tempus massa, ac iaculis sem nibh sollicitudin felis. Sed fermentum aliquam pretium. Pellentesque consectetur gravida orci et vulputate. Donec eros velit, feugiat sed nisl et, pulvinar consectetur mi. Ut sit amet nulla tristique, porta dolor quis, viverra magna. Maecenas tincidunt, tortor in.'
    aboutMe.appendChild(textAbout);
    
    // submain- hours
    const hours = document.createElement('div');
    hours.classList.add('container', 'round-corners', 'hours');
    main.appendChild(hours);
    
    const titleHours = document.createElement('h3');
    titleHours.innerText = 'Hours';
    hours.appendChild(titleHours);

    const hoursContent = ['Sunday: 8am - 8pm',
        'Monday: 6am - 6pm',
        'Tuesday: 6am - 6pm',
        'Wednesday: 6am - 6pm',
        'Thursday: 6am - 10pm',
        'Friday: 6am - 10pm',
        'Saturday: 8am - 10pm'
    ];
    const hoursTable = document.createElement('table');
    for (let j = 0; j < hoursContent.length; j++) {
        const tr = document.createElement('tr');
        hoursTable.appendChild(tr);
        const split = hoursContent[j].split(': ');
        for (let i = 0; i < 2; i++) {
            const th = document.createElement('th');
            th.innerText = split[i];
            tr.appendChild(th);
        }
    }
    hours.appendChild(hoursTable);
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMainMenu)
/* harmony export */ });
function loadMainMenu (main) {
    main.classList.remove('main');
    main.classList.add('menu-main');
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('grid-container', 'round-corners');
    main.appendChild(gridContainer);

    for (let i = 1; i < 7; i++) {
        const imgDiv = document.createElement('div');
        gridContainer.appendChild(imgDiv);
        const img = document.createElement('img');
        const link = '../dist/img/menu/pancake' + i + '.jpeg';
        img.setAttribute('src', link);
        imgDiv.classList.add('img-div');
        imgDiv.appendChild(img);
        const title = document.createElement('h3');
        title.innerText = `pancake${i}`;
        imgDiv.appendChild(title);
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");



(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHeader)();
const main = (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadMainContainer)();
(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadMainHome)(main);
tabManager();






function tabManager() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab) => {
        tab.addEventListener('click', (e) => {
            switch(e.target.getAttribute('data-tab')) {
                case 'Home':
                    main.innerHTML = '';
                    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadMainHome)(main);
                    break;
                case 'Menu':
                    main.innerHTML = '';
                    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])(main);
                    break;
                case 'Contact':
                    alert('This button does\'t work yet!');
                    break;
            }
            // console.log(e.target);
        })
    })
};


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDaEZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLEVBQUU7QUFDdEM7QUFDQTtBQUNBOzs7Ozs7VUNuQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOd0U7QUFDbkM7O0FBRXJDLG9EQUFVO0FBQ1YsYUFBYSwyREFBaUI7QUFDOUIsc0RBQVk7QUFDWjs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNEQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvREFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkSGVhZGVyKCkge1xuICAgIC8vIGhlYWRlclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInLCAnY29udGFpbmVyJyxcbiAgICAgJ3JvdW5kLWNvcm5lcnMnLCAnY29udGFpbmVyLXNpemUnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgXG4gICAgY29uc3QgdGl0bGVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlSGVhZGVyLmlubmVyVGV4dCA9ICdTd2VldC1Mb25naXR1ZGluYWwtQ3lsaW5kZXJzJztcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGVIZWFkZXIpO1xuXG4gICAgY29uc3QgdGFiQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFiQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RhYi1jb250YWluZXInKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGFiQ29udGFpbmVyKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRhYnMgPSBbJ0hvbWUnLCAnTWVudScsICdDb250YWN0J11cbiAgICAgICAgY29uc3QgdGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgICAgICAgdGFiLnNldEF0dHJpYnV0ZSgnZGF0YS10YWInLCB0YWJzW2ldKTtcbiAgICAgICAgdGFiLmlubmVyVGV4dCA9IHRhYnNbaV07XG4gICAgICAgIHRhYkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRNYWluQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItc2l6ZScsICdtYWluJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbiAgICByZXR1cm4gbWFpbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRNYWluSG9tZShtYWluKSB7XG4gICAgLy8gc3VibWFpbiAtIHRleHRcbiAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtbWFpbicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpXG4gICAgY29uc3QgYWJvdXRNZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFib3V0TWUuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJywgJ3JvdW5kLWNvcm5lcnMnLCAndGV4dCcpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChhYm91dE1lKTtcbiAgICBcbiAgICBjb25zdCB0aXRsZUFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0aXRsZUFib3V0LmlubmVyVGV4dCA9ICdMb3JlbSBJcHN1bScgO1xuICAgIGFib3V0TWUuYXBwZW5kQ2hpbGQodGl0bGVBYm91dCk7XG4gICAgXG4gICAgY29uc3QgdGV4dEFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dEFib3V0LmlubmVyVGV4dCA9ICdVdCBoZW5kcmVyaXQsIHJpc3VzIHZpdGFlIHBvcnR0aXRvciB2ZXN0aWJ1bHVtLCBwdXJ1cyBqdXN0byB0ZW1wdXMgbWFzc2EsIGFjIGlhY3VsaXMgc2VtIG5pYmggc29sbGljaXR1ZGluIGZlbGlzLiBTZWQgZmVybWVudHVtIGFsaXF1YW0gcHJldGl1bS4gUGVsbGVudGVzcXVlIGNvbnNlY3RldHVyIGdyYXZpZGEgb3JjaSBldCB2dWxwdXRhdGUuIERvbmVjIGVyb3MgdmVsaXQsIGZldWdpYXQgc2VkIG5pc2wgZXQsIHB1bHZpbmFyIGNvbnNlY3RldHVyIG1pLiBVdCBzaXQgYW1ldCBudWxsYSB0cmlzdGlxdWUsIHBvcnRhIGRvbG9yIHF1aXMsIHZpdmVycmEgbWFnbmEuIE1hZWNlbmFzIHRpbmNpZHVudCwgdG9ydG9yIGluLidcbiAgICBhYm91dE1lLmFwcGVuZENoaWxkKHRleHRBYm91dCk7XG4gICAgXG4gICAgLy8gc3VibWFpbi0gaG91cnNcbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvdXJzLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicsICdyb3VuZC1jb3JuZXJzJywgJ2hvdXJzJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChob3Vycyk7XG4gICAgXG4gICAgY29uc3QgdGl0bGVIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgdGl0bGVIb3Vycy5pbm5lclRleHQgPSAnSG91cnMnO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKHRpdGxlSG91cnMpO1xuXG4gICAgY29uc3QgaG91cnNDb250ZW50ID0gWydTdW5kYXk6IDhhbSAtIDhwbScsXG4gICAgICAgICdNb25kYXk6IDZhbSAtIDZwbScsXG4gICAgICAgICdUdWVzZGF5OiA2YW0gLSA2cG0nLFxuICAgICAgICAnV2VkbmVzZGF5OiA2YW0gLSA2cG0nLFxuICAgICAgICAnVGh1cnNkYXk6IDZhbSAtIDEwcG0nLFxuICAgICAgICAnRnJpZGF5OiA2YW0gLSAxMHBtJyxcbiAgICAgICAgJ1NhdHVyZGF5OiA4YW0gLSAxMHBtJ1xuICAgIF07XG4gICAgY29uc3QgaG91cnNUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBob3Vyc0NvbnRlbnQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICBob3Vyc1RhYmxlLmFwcGVuZENoaWxkKHRyKTtcbiAgICAgICAgY29uc3Qgc3BsaXQgPSBob3Vyc0NvbnRlbnRbal0uc3BsaXQoJzogJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgICAgICAgICB0aC5pbm5lclRleHQgPSBzcGxpdFtpXTtcbiAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkKHRoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBob3Vycy5hcHBlbmRDaGlsZChob3Vyc1RhYmxlKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWFpbk1lbnUgKG1haW4pIHtcbiAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4nKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21lbnUtbWFpbicpO1xuICAgIGNvbnN0IGdyaWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmlkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dyaWQtY29udGFpbmVyJywgJ3JvdW5kLWNvcm5lcnMnKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGdyaWRDb250YWluZXIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgY29uc3QgaW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nRGl2KTtcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNvbnN0IGxpbmsgPSAnLi4vZGlzdC9pbWcvbWVudS9wYW5jYWtlJyArIGkgKyAnLmpwZWcnO1xuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBsaW5rKTtcbiAgICAgICAgaW1nRGl2LmNsYXNzTGlzdC5hZGQoJ2ltZy1kaXYnKTtcbiAgICAgICAgaW1nRGl2LmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gYHBhbmNha2Uke2l9YDtcbiAgICAgICAgaW1nRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBsb2FkSGVhZGVyLCBsb2FkTWFpbkNvbnRhaW5lciwgbG9hZE1haW5Ib21lIH0gZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBsb2FkTWFpbk1lbnUgZnJvbSAnLi9tZW51LmpzJztcblxubG9hZEhlYWRlcigpO1xuY29uc3QgbWFpbiA9IGxvYWRNYWluQ29udGFpbmVyKCk7XG5sb2FkTWFpbkhvbWUobWFpbik7XG50YWJNYW5hZ2VyKCk7XG5cblxuXG5cblxuXG5mdW5jdGlvbiB0YWJNYW5hZ2VyKCkge1xuICAgIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiJyk7XG4gICAgdGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFiJykpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdIb21lJzpcbiAgICAgICAgICAgICAgICAgICAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgbG9hZE1haW5Ib21lKG1haW4pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdNZW51JzpcbiAgICAgICAgICAgICAgICAgICAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgbG9hZE1haW5NZW51KG1haW4pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdDb250YWN0JzpcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1RoaXMgYnV0dG9uIGRvZXNcXCd0IHdvcmsgeWV0IScpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcbiAgICAgICAgfSlcbiAgICB9KVxufTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9