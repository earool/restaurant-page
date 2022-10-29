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


(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHeader)();
const main = (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadMainContainer)();
(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadMainHome)(main);






// function tabManager() {
//     const tabs = document.querySelectorAll('.tab');
//     tabs.forEach((tab) => {
//         tab.addEventListener('click', (e) => {
//             console.log(e.target);
//         })
//     })
// };


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlCQUF5QjtBQUM3QztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDOUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOd0U7O0FBRXhFLG9EQUFVO0FBQ1YsYUFBYSwyREFBaUI7QUFDOUIsc0RBQVk7Ozs7Ozs7QUFPWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLFFBQVE7QUFDUiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbmNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEhlYWRlcigpIHtcbiAgICAvLyBoZWFkZXJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJywgJ2NvbnRhaW5lcicsXG4gICAgICdyb3VuZC1jb3JuZXJzJywgJ2NvbnRhaW5lci1zaXplJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIFxuICAgIGNvbnN0IHRpdGxlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZUhlYWRlci5pbm5lclRleHQgPSAnU3dlZXQtTG9uZ2l0dWRpbmFsLUN5bGluZGVycyc7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlSGVhZGVyKTtcblxuICAgIGNvbnN0IHRhYkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhYkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YWItY29udGFpbmVyJyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRhYkNvbnRhaW5lcik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICBjb25zdCB0YWJzID0gWydIb21lJywgJ01lbnUnLCAnQ29udGFjdCddXG4gICAgICAgIGNvbnN0IHRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gICAgICAgIHRhYi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFiJywgdGFic1tpXSk7XG4gICAgICAgIHRhYi5pbm5lclRleHQgPSB0YWJzW2ldO1xuICAgICAgICB0YWJDb250YWluZXIuYXBwZW5kQ2hpbGQodGFiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTWFpbkNvbnRhaW5lcigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLXNpemUnLCAnbWFpbicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgcmV0dXJuIG1haW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTWFpbkhvbWUobWFpbikge1xuICAgIC8vIHN1Ym1haW4gLSB0ZXh0XG4gICAgY29uc3QgYWJvdXRNZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFib3V0TWUuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJywgJ3JvdW5kLWNvcm5lcnMnLCAndGV4dCcpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChhYm91dE1lKTtcbiAgICBcbiAgICBjb25zdCB0aXRsZUFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0aXRsZUFib3V0LmlubmVyVGV4dCA9ICdMb3JlbSBJcHN1bScgO1xuICAgIGFib3V0TWUuYXBwZW5kQ2hpbGQodGl0bGVBYm91dCk7XG4gICAgXG4gICAgY29uc3QgdGV4dEFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dEFib3V0LmlubmVyVGV4dCA9ICdVdCBoZW5kcmVyaXQsIHJpc3VzIHZpdGFlIHBvcnR0aXRvciB2ZXN0aWJ1bHVtLCBwdXJ1cyBqdXN0byB0ZW1wdXMgbWFzc2EsIGFjIGlhY3VsaXMgc2VtIG5pYmggc29sbGljaXR1ZGluIGZlbGlzLiBTZWQgZmVybWVudHVtIGFsaXF1YW0gcHJldGl1bS4gUGVsbGVudGVzcXVlIGNvbnNlY3RldHVyIGdyYXZpZGEgb3JjaSBldCB2dWxwdXRhdGUuIERvbmVjIGVyb3MgdmVsaXQsIGZldWdpYXQgc2VkIG5pc2wgZXQsIHB1bHZpbmFyIGNvbnNlY3RldHVyIG1pLiBVdCBzaXQgYW1ldCBudWxsYSB0cmlzdGlxdWUsIHBvcnRhIGRvbG9yIHF1aXMsIHZpdmVycmEgbWFnbmEuIE1hZWNlbmFzIHRpbmNpZHVudCwgdG9ydG9yIGluLidcbiAgICBhYm91dE1lLmFwcGVuZENoaWxkKHRleHRBYm91dCk7XG4gICAgXG4gICAgLy8gc3VibWFpbi0gaG91cnNcbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvdXJzLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicsICdyb3VuZC1jb3JuZXJzJywgJ2hvdXJzJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChob3Vycyk7XG4gICAgXG4gICAgY29uc3QgdGl0bGVIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgdGl0bGVIb3Vycy5pbm5lclRleHQgPSAnSG91cnMnO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKHRpdGxlSG91cnMpO1xuXG4gICAgY29uc3QgaG91cnNDb250ZW50ID0gWydTdW5kYXk6IDhhbSAtIDhwbScsXG4gICAgICAgICdNb25kYXk6IDZhbSAtIDZwbScsXG4gICAgICAgICdUdWVzZGF5OiA2YW0gLSA2cG0nLFxuICAgICAgICAnV2VkbmVzZGF5OiA2YW0gLSA2cG0nLFxuICAgICAgICAnVGh1cnNkYXk6IDZhbSAtIDEwcG0nLFxuICAgICAgICAnRnJpZGF5OiA2YW0gLSAxMHBtJyxcbiAgICAgICAgJ1NhdHVyZGF5OiA4YW0gLSAxMHBtJ1xuICAgIF07XG4gICAgY29uc3QgaG91cnNUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBob3Vyc0NvbnRlbnQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICBob3Vyc1RhYmxlLmFwcGVuZENoaWxkKHRyKTtcbiAgICAgICAgY29uc3Qgc3BsaXQgPSBob3Vyc0NvbnRlbnRbal0uc3BsaXQoJzogJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgICAgICAgICB0aC5pbm5lclRleHQgPSBzcGxpdFtpXTtcbiAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkKHRoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBob3Vycy5hcHBlbmRDaGlsZChob3Vyc1RhYmxlKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGxvYWRIZWFkZXIsIGxvYWRNYWluQ29udGFpbmVyLCBsb2FkTWFpbkhvbWUgfSBmcm9tICcuL2hvbWUuanMnO1xuXG5sb2FkSGVhZGVyKCk7XG5jb25zdCBtYWluID0gbG9hZE1haW5Db250YWluZXIoKTtcbmxvYWRNYWluSG9tZShtYWluKTtcblxuXG5cblxuXG5cbi8vIGZ1bmN0aW9uIHRhYk1hbmFnZXIoKSB7XG4vLyAgICAgY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKTtcbi8vICAgICB0YWJzLmZvckVhY2goKHRhYikgPT4ge1xuLy8gICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuLy8gICAgICAgICB9KVxuLy8gICAgIH0pXG4vLyB9O1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=