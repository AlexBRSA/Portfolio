"use strict"
const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows());
   }
};
if (isMobile.any()) {
   document.body.classList.add('_touch');
} else {
   document.body.classList.add('_pc');
}
//меню бургер
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
   const menuBody = document.querySelector('.menu__body');
iconMenu.addEventListener("click", function(e) {
document.body.classList.toggle('_lock');
iconMenu.classList.toggle('_active');
menuBody.classList.toggle('_active');
   });
}

//прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length> 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });
   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
      
         if (iconMenu.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
         }
         
      window.scrollTo({
         top: gotoBlockValue,
         behavior: "smooth"
      });
      e.preventDefault();
      }
   }
}

//slider
/* Устанавливаем индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд*/
function nextSlide() {
showSlides(slideIndex += 1);
}

/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
function previousSlide() {
showSlides(slideIndex -= 1);  
}
/* Устанавливаем текущий слайд */
function currentSlide(n) {
showSlides(slideIndex = n);
}
/* Функция перелистывания */
function showSlides(n) {
let i;
let slides = document.getElementsByClassName("item");

if (n > slides.length) {
slideIndex = 1
}
if (n < 1) {
slideIndex = slides.length
}
/* Проходим по каждому слайду в цикле for */
for (let slide of slides) {
slide.style.display = "none";
}   
slides[slideIndex - 1].style.display = "block"; 
}
/* меню arrow */
let link = document.querySelector('link');
if(isMobile.any()) {
   document.body.classList.add('_touch');
/*ищем все элементы arrow*/
   let menuArrows =document.querySelectorAll('.menu__arrow');
   if (menuArrows.length > 0){
      for (let index = 0; index < menuArrows.length; index++) {
         const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function(e) {
            menuArrow.parentElement.classList.toggle('_active'); 
         });
      }
   } 
} else {
   document.body.classList.add('_pc');
}

//открытие текста
document.addEventListener("DOMContentLoaded", () => {
const button = document.getElementById("button");
const rect = document.getElementById("rect");

button.addEventListener("click", () => {
toggleTwoClasses(rect, "is-visible", "is-hidden", 500);
})
});
document.addEventListener("DOMContentLoaded", () => {
const button02 = document.getElementById("button02");
const rect02 = document.getElementById("rect02");

button02.addEventListener("click", () => {
toggleTwoClasses(rect02, "is-visible", "is-hidden", 500);   
})
});
document.addEventListener("DOMContentLoaded", () => {
const button03 = document.getElementById("button03");
const rect03 = document.getElementById("rect03");

button03.addEventListener("click", () => {
toggleTwoClasses(rect03, "is-visible", "is-hidden", 500);
});   
});

function toggleTwoClasses(element, first, second, timeOfAnimation) {
if (!element.classList.contains(first)) {
element.classList.add(first);
element.classList.remove(second);
} else {
element.classList.add(second);
window.setTimeout(function() {
element.classList.remove(first);
}, timeOfAnimation);
}
}
