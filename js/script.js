$(document).ready(function () {
  var $element = $('#aside');
  var $follow = $element.find('.title-aside-wrapper');
  var followHeight = $element.find('.title-aside-wrapper').outerHeight();
  var height = $element.outerHeight();
  var window_height = $(window).height();

  $(window).scroll(function () {
    var pos = $(window).scrollTop();
    var top = $element.offset().top;


    if (top + height - followHeight < pos + (window_height / 2 - followHeight / 2) || top > pos + (window_height / 2 - followHeight / 2) ) { 
    	return; 
    } 
    var offset = parseInt($(window).scrollTop() - top + (window_height / 2 - followHeight / 2));
    
    if (offset > 0) {
    $follow.css('transform', 'translateY('+ offset +'px)');
    }

  });

});

$(document).ready(function () {
  var $element = $('#projetos');
  var $follow = $element.find('.title-aside-wrapper');
  var followHeight = $element.find('.title-aside-wrapper').outerHeight();
  var height = $element.outerHeight();
  var window_height = $(window).height();

  $(window).scroll(function () {
    var pos = $(window).scrollTop();
    var top = $element.offset().top;


    if (top + height - followHeight < pos + (window_height / 2 - followHeight / 2) || top > pos + (window_height / 2 - followHeight / 2) ) { 
    	return; 
    } 
    var offset = parseInt($(window).scrollTop() - top + (window_height / 2 - followHeight / 2));
    
    if (offset > 0) {
    $follow.css('transform', 'translateY('+ offset +'px)');
    }

  });

});
