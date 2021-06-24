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

      // Typing text animation from Type JS CDN
      var typed = new Typed('.typing', {
        strings: ["Web Developer", "Programmer"],
        typeSpeed: 100,
        backSpeed: 70,
        loop: true
      });

      var typed = new Typed('.position', {
        strings: ["Web Developer", "Programmer"],
        typeSpeed: 100,
        backSpeed: 70,
        loop: true
      });

     // Smooth Scroll
      $(document).on('click', 'a[href^="#"]', function(e) {
        e.preventDefault();
        
        $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
        },700);
      });
 });


    // Form Validation with Sweet Alert CDN Notification using Javascript
    const contactName = document.querySelector('.name');
    const contact = document.querySelector('.contact'); 
    const email = document.querySelector('.email'); 
    const message = document.querySelector('.message'); 
    const submitBtn = document.querySelector('#submit');
    const form = document.querySelector('#contact-form');

    submitBtn.addEventListener('click', formValidation);

    function formValidation(e) {

      if (contactName.value === '' || contact.value === '' || email.value === '' || message.value === '') {
        Swal.fire({
          icon: 'error',
          title: 'Must be required!',
          text: 'Name, Contact, Email and Message are required.'
        });
      } else {
        form.reset();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Thank You!',
          text: 'Sent has been successfully!',
          showConfirmButton: false,
          timer: 2500
        });
      }
      e.preventDefault();
    }

     // Scroll Reveal using Javascript
     window.addEventListener('scroll', scrollReveal);
    
     function scrollReveal() {
       const reveal = document.querySelectorAll('.section .reveal');

       for (let i = 0; i < reveal.length; i++) {
         const windowHeight = window.innerHeight;
         const revealTop = reveal[i].getBoundingClientRect().top;
         const revealPoint = 170;
         
         if(revealTop < windowHeight - revealPoint) {
           reveal[i].classList.add('active');
         } else {
           reveal[i].classList.remove('active');
         }
       }
     }