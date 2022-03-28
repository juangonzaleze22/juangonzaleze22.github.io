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
    /* {
      name: 'Xvfive',
      url: 'https://xvfive.com/',
      src:"img/xvfive.png"
    }, */
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
    {
      name: 'Notaria 101',
      url: 'https://notaria101hermosillo.com/',
      src: "img/notaria101.png"
    },
    {
      name: 'Loisi Oil Team',
      url: 'http://landing-oilsi.fidelitywebs.mx/',
      src: "img/loisi.png"
    },
    {
      name: 'Rockblade',
      url: 'https://rockblade.netlify.app/',
      src: "img/rockblade.png"
    },
    {
      name: 'Impromine',
      url: 'http://inpromine.com/',
      src: "img/impromine.png"
    },
    {
      name: 'Econollantas',
      url: 'https://econollantas.com/',
      src: "img/econollantas.png"
    },
    {
      name: 'Electro Mecanic',
      url: 'https://www.electro-metalic.com/',
      src: "img/electro-mecanic.png"
    },
    {
      name: 'Spiffy Pro',
      url: 'https://spiffy.com.mx/pro',
      src: "img/spiffy_pro.png"
    },
    {
      name: 'Spiffy',
      url: 'https://spiffy.com.mx/',
      src: "img/spiffy.png"
    },
    {
      name: 'App Spiffy Pro',
      url_ios: 'https://apps.apple.com/us/app/spiffypro-beauty-managers/id1517904799#?platform=iphone',
      url_android: 'https://play.google.com/store/apps/details?id=com.fidelityapps.spiffyPro',
      src: "img/spiffyProApp.png",
      app: true
    },
    {
      name: 'App Spiffy',
      url_ios: 'https://apps.apple.com/us/app/spiffy-belleza-a-domicilio/id1517902386',
      url_android: 'https://play.google.com/store/apps/details?id=com.fidelityapps.spiffyApp',
      src: "img/spiffyApp.png",
      app: true
    }, 
  ];

 
  portafolio.forEach(element => {
    console.log(element.app);
    if (element.app){
      $('#tzGallery').append(`
      <div class="col-6 col-md-4 p-2 text-center ">
        <a class="lightbox" >
          <img src="`+element.src+`" alt="Bridge">
          <h4 class="text-center my-2">`+element.name+`</h4>
        </a>
        <a class="btn-link btn" href="`+element.url_ios+`" target="_blank">Ios</a>
        <a class="btn-link btn" href="`+element.url_android+`" target="_blank">Android</a>
      </div>
    `);
    }else{
      $('#tzGallery').append(`
      <div class="col-6 col-md-4 p-2">
        <a class="lightbox" href=`+element.url+` target="_blank">
          <img src="`+element.src+`" alt="Bridge">
          <h4 class="text-center my-2">`+element.name+`</h4>
        </a>
      </div>
    `);
    }
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