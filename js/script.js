//Slider

let sliderCount = $("#slider").find(".slider-img li img").length;
let sliderImg = $("#slider").find(".slider-img");
//
let sliderArrow = `<ul class="slider-arrow"><li class="arrow-left" role="button"><i class="fas fa-chevron-left"></i></li><li class="arrow-right" role="button"><i class="fas fa-chevron-right"></i></li></ul>`;
let sliderDotLi = "";
for (let i = 0; i < sliderCount; i++) {
  sliderDotLi += `<li><i class="fas fa-circle"></i></li>`;
}
let sliderDot = `<ul class="slider-dot">${sliderDotLi}</ul>`;
$("#slider").append(sliderArrow + sliderDot);
let activeDefaultCount = $(".slider-dot li.active").length;
  if (activeDefaultCount != 1) {
    $(".slider-dot li")
      .removeClass()
      .eq(0)
      .addClass("active");
  }
let sliderIndex = $(".slider-dot li.active").index();
sliderImg.css("left", -sliderIndex * 100 + "%");
//
function sliderPos() {
    sliderImg.css("left", -sliderIndex * 100 + "%");
    $(".slider-dot li")
      .removeClass()
      .eq(sliderIndex)
      .addClass("active");
  }
  
  $(".arrow-right").click(function() {
    sliderIndex >= sliderCount - 1 ? (sliderIndex = 0) : sliderIndex++;
    sliderPos();
  });
  
  $(".arrow-left").click(function() {
    sliderIndex <= 0 ? (sliderIndex = sliderCount - 1) : sliderIndex--;
    sliderPos();
  });
  
  $(".slider-dot li").click(function() {
    sliderIndex = $(this).index();
    sliderPos();
  });
 
  $("#slider").on({
    mouseenter: () => {
      clearInterval(goSlider);
    },
    mouseleave: () => {
      goSlider = setInterval(() => {
        $(".arrow-right").click();
      }, 3000);
    }
  });
//NavBar

let mainNav = document.getElementById('menu');
let navBarToggle = document.getElementById('navbar-toggle');

navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('actif');
});

//GotoTop

$(document).ready(function() {
    function scroll_to_top() {
        $('.toTop').click(function() {
            $('html,body').animate({scrollTop: 0}, 'slow');
        });
        $(window).scroll(function(){
            if($(window).scrollTop()<500){
                $('.toTop').fadeOut();
            } else{
                $('.toTop').fadeIn();
            }
        });
    }
    scroll_to_top("#scroll_to_top");
});