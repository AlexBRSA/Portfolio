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
//слайдер
const testimonials = document.querySelector('.slider-list');
const scroller = testimonials.querySelector('.slider-track01');
const nextBtn = testimonials.querySelector('.btn.next');
const prevBtn = testimonials.querySelector('.btn.prev');
const itemWidth = testimonials.querySelector('.meat-item').clientWidth;

nextBtn.addEventListener('click', scrollToNextItem);
prevBtn.addEventListener('click', scrollToPrevItem);

function scrollToNextItem() {
   if(scroller.scrollLeft < (scroller.scrollWidth - itemWidth))
       // The scroll position is not at the beginning of last item
      scroller.scrollBy({left: itemWidth, top: 0, behavior:'smooth'});
   else
       // Last item reached. Go back to first item by setting scroll position to 0
      scroller.scrollTo({left: 0, top: 0, behavior:'smooth'});
}
function scrollToPrevItem() {
   if(scroller.scrollLeft != 0)
       // The scroll position is not at the beginning of first item
      scroller.scrollBy({left: -itemWidth, top: 0, behavior:'smooth'});
   else
       // This is the first item. Go to last item by setting scroll position to scroller width
      scroller.scrollTo({left: scroller.scrollWidth, top: 0, behavior:'smooth'});
}


