export default function loadHomePage() {
    const content = document.querySelector('#content');
    content.classList.add('content');

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
        tab.innerText = tabs[i];
        tabContainer.appendChild(tab);
    }

    // main

    const main = document.createElement('main');
    main.classList.add('container-size', 'main');
    content.appendChild(main);
    
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