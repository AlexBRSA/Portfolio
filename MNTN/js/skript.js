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

//паралакс
let mount = document.getElementById("mount");
let men = document.getElementById("men");
window.addEventListener('scroll', function(){
var value = window.scrollY;
   mount.style.top = -value * 0.40 + 'px';
   men.style.top = -value * 0.3 + 'px';
   })
   
//плавный скролинг до якоря
   const smoothLinks = document.querySelectorAll('a[href^="#"]');
   for (let smoothLink of smoothLinks) {
      smoothLink.addEventListener('click', function (e) {
         e.preventDefault();
         const id = smoothLink.getAttribute('href');
   
         document.querySelector(id).scrollIntoView({
               behavior: 'smooth',
               block: 'start'
         });
      });
   };

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