const abrirMenu = document.getElementById("button-menu-abrir");
const nav = document.querySelector(".lista-navegacao");
const navItens = document.querySelectorAll(".lista-navegacao li");



abrirMenu.addEventListener('click', ativarBotao);


function ativarBotao(){
  nav.classList.toggle("nav-active");
  animarItensLista();
}


function animarItensLista(){
  navItens.forEach((link,index) => {
    if(link.style.animation) {
      link.style.animation = "";
    }
     else{
      link.style.animation = `navLinkFade 1s ease backwards ${index/7 + 0.3}s`;
    }
    });
  }
