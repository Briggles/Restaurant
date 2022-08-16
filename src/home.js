import Logo from './leo.jpeg';

const home = () => {
    const myLogo = new Image();

    myLogo.src = Logo;
    myLogo.style.maxWidth = '90%';
    const imageHolder = document.createElement('div');

    imageHolder.setAttribute('id', 'imageHolder');
    imageHolder.appendChild(myLogo);
    
    const main = document.getElementById('mainID');
    main.textContent = 'Welcome to Leo\'s Deli, the #1 restaurant in the land.  Check out our menu selections.  Be sure to stop by and ask for me, Leo, the owner of Leo\'s Deli!';
    main.appendChild(imageHolder);
    
    //content.appendChild(main);

}

export default home;