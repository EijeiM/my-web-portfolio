$(document).ready(function(){
    // Side Nav
    $('.sidenav').sidenav({
        edge: 'right',
        draggable: false
    });

    // Modal
    $('.modal').modal({
      dismissible: false
    });

    // Media Material Box
    $('.materialboxed').materialbox();

    // Carousel
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true,
        dragged: true
      });

    // Input Length
    $('input#icon_contacts, input#icon_message').characterCounter();
    

      // Form Validation with Sweet Alert CDN Notification
      $('#submit').click(function(){
        Swal.fire({
          position: 'center',
          icon: 'success',
          text: 'Sent has been successfully!',
          showConfirmButton: false,
          timer: 2000
        });
      });

      // Typing text animation from Type JS CDN
      var typed = new Typed(".typing", {
        strings: ["Web Developer", "Full Stack Web Developer","Sofware Engineer", "Programmer"],
        typeSpeed: 100,
        backSpeed: 70,
        loop: true
      });

      var typed = new Typed(".position", {
        strings: ["Web Developer", "Full Stack Web Developer","Software Engineer", "Programmer"],
        typeSpeed: 100,
        backSpeed: 70,
        loop: true
      });
 });

  // Smooth Scroll
   $(document).on('click', 'a[href^="#"]', function(e) {
     e.preventDefault();
     
     $('html, body').animate({
       scrollTop: $($.attr(this, 'href')).offset().top
      },700);
    });

    