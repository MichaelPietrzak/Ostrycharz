let preloaderFinishFlag = false;
let preloader2FinishFlag = false;
//
//
//particles
//particlesJS.load('particles-js', 'js/particlesjs-config.json', function () {});
//
//
//preloader
$(window).on('load', function () {
  disableScroll();
  setTimeout(function () {
    $('#preloader').fadeOut('slow', function () {
      $(this).remove();
    });
  }, 950);
  setTimeout(function () {
    preloaderFinishFlag = true;
    enableScroll();
  }, 1200);
});
//
//
//preloader2
$(window).on('scroll', function () {
  if (!preloader2FinishFlag) {
    $('html, body').stop().animate({
      scrollTop: 0
    }, 0);
  }
  if (preloaderFinishFlag) {
    $('#preloader2').slideUp('slow', function () {
      preloader2FinishFlag = true;
    });
  }
});
//
//
//scroll on click
$('a[href^="#"]').on('click', function (event) {
  var target = $(this.getAttribute('href'));
  let scrollSpeed = Math.log10($(document).scrollTop()) * 300;
  let targetSpeed = Math.log10(target.offset().top) * 300;
  if (target.length) {
    event.preventDefault();
    if (this.id != 'homePreloader') {
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 100
      }, targetSpeed);
    }
    else if ($(document).scrollTop() >= 0) {
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 100
      }, scrollSpeed);
      if (this.id == 'homePreloader') {
        setTimeout(function () {
          preloader2FinishFlag = false;
          $('#preloader2').slideDown('slow', function () {});
        }, scrollSpeed + 1);
      }
    }
  }
});
//
//
//run matchHeight
$(function () {
  $('.jquery-match-height-item').matchHeight();
});
$(document).ready(function () {
  $(function () {
    var includes = $('[data-include]');
    jQuery.each(includes, function () {
      var file = 'partial_views/' + $(this).data('include') + '.html';
      $(this).load(file);
    });
  });
  $(".button-collapse").sideNav();
});