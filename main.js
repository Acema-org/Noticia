
let menu = document.querySelector('nav ul');
let botao = document.querySelector('button');

function showMenu(){
    if(menu.classList.contains('open')){
        menu.classList.remove('open');
        document.querySelector('.bot').src = "comandos/menu.svg";
    }else{
        menu.classList.add('open');
        document.querySelector('.bot').src = "comandos/close.svg";
    }
}