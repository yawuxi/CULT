$(document).ready(function () {

   //E-mail Ajax Send
   $("popup-form").submit(function () {
      var th = $(this);
      $.ajax({
         type: "POST",
         url: "mail.php",
         data: th.serialize()
      }).done(function () {
         alert("Thank you!");
         setTimeout(function () {
            // Done Functions
            th.trigger("reset");
         }, 1000);
      });
      return false;
   });

});