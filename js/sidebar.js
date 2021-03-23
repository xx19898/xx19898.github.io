// Select DOM Items 
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.sidebar');
const main = document.querySelector('.main');



let showMenu = false;
let openIntroContainer = false;

menuBtn.addEventListener('click', toggleMenu);
main.addEventListener('click', closeSidebarWhenClickedOnMain);

function closeSidebarWhenClickedOnMain () {
    if(showMenu){
        menu.classList.remove('show');
        menuBtn.classList.remove('close');
        main.classList.remove("overlay");
        showMenu = false;
    
    }
}





function toggleMenu () {
    if(!showMenu){

        menuBtn.classList.add('close');
        menu.classList.add('show');
        main.classList.add("overlay");
        showMenu = true;

    }else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        main.classList.remove("overlay");
        showMenu = false;

    }
}

