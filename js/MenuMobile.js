export default function menuMobile() {
  const menuBtn = document.querySelector('.botao-menu');
  const menuIcone = document.querySelector('.menu-mobile-icone');
  const menuMobile = document.querySelector('.menu-mobile');
  const menuLinks = document.querySelectorAll('.menu-mobile a');

  function ativarGirarIcone() {
    menuIcone.classList.toggle('aberto');
  }
  menuIcone.addEventListener('click', ativarGirarIcone);

  function ativarMenuMobile() {
    menuMobile.classList.toggle('ativo');
  }
  menuBtn.addEventListener('click', ativarMenuMobile);

  function fecharMenu() {
    menuMobile.classList.remove('ativo');
  }

  menuLinks.forEach((evento) => {
    evento.addEventListener('click', fecharMenu);
  });
}
