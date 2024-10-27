// navbar

// navbar

// search-bar
$(document).ready(function () {
  $("#search").click(function () {
    $("#search-bar").toggle();
    return false;
  });
});

// side-bar-menu
$(document).ready(function () {
  $("#sidebar-menu-list-btn").click(function () {
    $(".sidebar-menu").toggleClass("transform");
    return false;
  });
});
$(document).ready(function () {
  $("#sidebar-menu-close-btn").click(function () {
    $(".sidebar-menu").toggleClass("transform");
    return false;
  });
});
// side-bar-menu

// search bar
$(document).ready(function () {
  $("#close-icon").hide(); // Initially hide the close icon
  $("#search-bar").hide(); // Initially hide the search bar

  $("#search-icon-wrapper").click(function () {
    $("#search-icon, #close-icon").toggle(); // Toggle between search and close icons
    $("#search-bar").toggle(); // Toggle the search bar visibility
  });
});
// search bar
// like btn
$(document).ready(function () {
  $(".like i").click(function () {
    $(".like i").css({ "color": "red" });
    return false;
  });
});
// like btn
// pointer js
var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function () {
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function () {
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})
// pointer js


// Set the date we're counting down to
var countDownDate = new Date("Oct 25, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);


// particle js

// particle js

// load more btn
$(document).ready(function () {
  $(".load-more").click(function () {
    $(".load-images").addClass("display-block");
    $(".load-more").hide();
    return false;
  });
});
// load more btn

// back to top button
var btn = $('#button');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});
// back to top button


// counter
var a = 0;
$(window).scroll(function () {
  var oTop = $("#counter-box").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $(".counter").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-number");
      $({
        countNum: $this.text()
      }).animate(
        {
          countNum: countTo
        },

        {
          duration: 5850,
          easing: "swing",
          step: function () {
            $this.text(
              Math.ceil(this.countNum).toLocaleString("en")
            );
          },
          complete: function () {
            $this.text(
              Math.ceil(this.countNum).toLocaleString("en")
            );
          }
        }
      );
    });
    a = 1;
  }
});
// counter 

// accordian
$(document).ready(function(){
  $(".accordian-text").hide(); 

  $(".accordian-item").click(function(){
      $(".accordian-text").slideUp(1000); 
      if (!$(this).find(".accordian-text").is(":visible")) { 
          $(this).find(".accordian-text").slideDown(1000);
      }
      return false;
  });
});

// accordian

