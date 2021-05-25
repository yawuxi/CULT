// burger 
$(document).ready(function () {
   $('.burger-menu').click(function (event) {
      $('.burger-menu,.menu__body').toggleClass('active');
      $('body').toggleClass('lock');
   });
});