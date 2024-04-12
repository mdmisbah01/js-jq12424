// js
// wow js
 wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       50,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();
// aos
 AOS.init({
  offset: 100,
  delay: 50,
  duration: 700,
  easing: 'linear',
 });





// jq
$(document).ready(function(){
	//--------------------------- alert
	// alert("hello");
	// $('button').click(function(){
	// alert("welcome");
	// })
	// counter up start
	$('.counter').counterUp({
    delay: 10,
    time: 1000
});

// slick
  $('.wrapper').slick({
  infinite: true,
  slidesToShow: 4,
    slidesToScroll: 1,
    speed: 400,
    // arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,

responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1, 
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
  ]
  });
    
    

$('.hello').slick({
  centerMode: true,
  centerPadding: '40px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

// mixitup
  var mixer = mixitup('#hello', {
   
    animation: {
        duration: 500
    }
});

  });
// circle-progress

(function ($) {

        function randomValue(min, max) { // min and max included
            return Math.floor(Math.random() * (max - min + 1) + min)
        }

        $('#progress_1').circleProgress({
            size: 350,
            value: 0,
            color: '#506886',
            progressWidth: 2
        });

        $('#progress_2').circleProgress({
            size:140,
            value: randomValue(0,50),
            color: 'secondary',
            progressWidth: 4
        });

        $('#progress_3').circleProgress({
            size: 200,
            value: randomValue(50,100),
            color: 'purple',
            progressWidth: 10
        });

        let seconds = 0;
        let testInterval = null;
        testInterval = setInterval(function(){
            if (seconds === 100){
                clearInterval(testInterval)
            }
            let color;
            switch(true){
                case seconds < 20:
                    color = 'danger';
                    break;
                case seconds < 40:
                    color = 'warning';
                    break;
                case seconds < 60:
                    color = 'info';
                    break;
                case seconds < 99:
                    color = 'primary';
                    break;
                default:
                    color = 'success';
                    break;
            }
            $('#progress_1').circleProgress('updateOptions', {
                value: seconds,

                color: color
            });
            seconds++;

        },40)

    }(jQuery));

// newsticker
$('#example-1').eocjsNewsticker({
  speed:      25
});

$('#example-2').eocjsNewsticker({
  divider:    '***',
  type:       'ajax',
  source:     './example.json',
  interval:   30
});

$('#example-3').eocjsNewsticker({
  speed:      10,
  divider:    '+',
  type:       'ajax',
  source:     './example.json',
  fetch:      true,
  interval:   30
});

$('#example-4').eocjsNewsticker({
  speed:      25,
  divider:    '***',
  direction:  'rtl'
});

$('#example-5').eocjsNewsticker({
  divider:    '***',
  type:       'ajax',
  source:     './example.json',
  interval:   30,
  direction:  'rtl'
});