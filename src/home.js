export default function loadHomePage() {
    const content = document.querySelector('#content');
    content.classList.add('content');

    // header
    const header = document.createElement('div');
    header.classList.add('header');
    header.classList.add('round-corners');
    content.appendChild(header);
    
    const title = document.createElement('h1');
    title.innerText = 'Sweet-Longitudinal-Cylinders';
    header.appendChild(title);

    const tabContainer = document.createElement('div');
    tabContainer.classList.add('tab-container');
    header.appendChild(tabContainer);

    for (let i = 0; i < 3; i++) {
        const tabs = ['Home', 'Menu', 'Contact']
        const tab = document.createElement('div');
        tab.classList.add('tab');
        tab.innerText = tabs[i];
        tabContainer.appendChild(tab);
    }

    
}