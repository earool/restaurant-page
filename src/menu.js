export default function loadMainMenu (main) {
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