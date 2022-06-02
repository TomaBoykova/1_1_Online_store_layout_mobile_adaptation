document.querySelector('.menu-icon-wrapper').onclick = function(){
   document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
   // document.querySelector('.nav__list-holder').style.display = "block";
   document.querySelector('.nav__list-holder').classList.toggle('.nav__list-holder--visible');
};


const scrollBth = document.querySelector('.scrollTop');

window.onscroll = () => {
   if (window.scrollY > 600) {
      scrollBth.classList.remove('scrollTop_hide');
   } else if (window.scrollY < 900) {
      scrollBth.classList.add('scrollTop_hide');
   }
};

scrollBth.onclick = () => {
   window.scrollTo(0, 0);

};