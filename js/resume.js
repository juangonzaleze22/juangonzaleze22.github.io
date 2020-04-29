(function($) {
  "use strict"; // Start of use strict
  $('[data-toggle="tooltip"]').tooltip()
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  /* Json portafolio */

  var portafolio = [
    {
      name: 'Faswet',
      url: 'https://faswet.com/',
      src:"img/faswet.png"
    },
    {
      name: 'Emetenjoy',
      url: 'https://emetenjoy.com/',
      src:"img/emetenjoy.png"
    },
    {
      name: 'Xvfive',
      url: 'https://xvfive.com/',
      src:"img/xvfive.png"
    },
    {
      name: 'Emetbusiness group',
      url: 'https://emetbusinessgroup.com/',
      src:"img/emetbusinessgroup.png"
    },
    {
      name: 'Ailewux',
      url: 'https://ailewux.com/',
      src:"img/ailewux.png"
    },
    {
      name: 'emetbg',
      url: 'https://emetbg.com/',
      src:"img/emetbg.png"
    },

  ];

 
  portafolio.forEach(element => {
    console.log(element);
   $('#tzGallery').append(`
    <div class="col-6 col-md-4 p-2" onclick="modal('`+element.src+`', '`+element.url+`', '`+element.name+`')">
      <a class="lightbox">
        <img src="`+element.src+`" alt="Bridge">
        <h4 class="text-center my-2">`+element.name+`</h4>
      </a>
    </div>
  `);
  }); 

  



})(jQuery); // End of use strict
function modal(src, url, name){
  console.log(src, url, name);
  $('#modalView').modal('show');

  $('#bodyPortafolio').html(`
    <a href=`+url+` target="_blank">
      <img class="img-fluid" src="`+src+`" alt="" />
      <h3 class="text-center my-3">`+name+`</h3>
    </a>
  `);
}