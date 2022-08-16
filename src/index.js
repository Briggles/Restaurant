import './style.css';
import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';

const content = document.getElementById('content');

const header = document.createElement('header');
const homeBtn = document.createElement('div');
const menuBtn = document.createElement('div');
const contactBtn = document.createElement('div');

function clearContent() {
    let clearMain = document.getElementById('mainID');
//    let clearImage = document.getElementById('imageHolder');
    while (clearMain.firstChild) {
          clearMain.removeChild(clearMain.lastChild);
    }    
//    while (clearImage.firstChild) {
 //       clearImage.removeChild(clearImage.lastChild);
 // }    

}

homeBtn.textContent = 'Home';
menuBtn.textContent = 'Menu';
contactBtn.textContent = 'Contact';

homeBtn.addEventListener('click', () => {
    clearContent();
    home();
});

menuBtn.addEventListener('click', () => {
    clearContent();
    menu();
});

contactBtn.addEventListener('click', () => {
    clearContent();
    contact();
});

header.appendChild(homeBtn);
header.appendChild(menuBtn);
header.appendChild(contactBtn);
content.appendChild(header);

const m = document.createElement('main');
m.setAttribute('id', 'mainID');
content.appendChild(m);


home();
//menu();
//contact();

const footer = document.createElement('footer');
footer.textContent = 'Copyright 2022 - Leo\'s Deli Incorporated.'
content.appendChild(footer);

document.body.appendChild(content);

console.log("This is a test.");