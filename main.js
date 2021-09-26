
//오버레이 클릭 시 이벤트
$('.overlay').click(function(){
    $(this).toggleClass("click");
    $('.sidebar').toggleClass("show");
    TitleFade();
    // randPos();
});

$('.sub-btn').click(function(){
    $('nav ul .sub-show').toggleClass("show");
});

var isOpen = false;

function TitleFade(){

  if(isOpen)
  {
    $('.sidebar-title-text').fadeOut();
    isOpen = false;
  }
  else
  {
    $('.sidebar-title-text').delay(400).fadeIn();

    isOpen = true;
  }
}

//랜덤 팜업 함수
function randPos(){
  var bodyWidth = $('.overlay-left').width();
  var bodyHeight = $('.overlay-left').height();
  var randPosX = Math.floor((Math.random()*bodyWidth));
  var randPosY = Math.floor((Math.random()*bodyHeight));
  
  $('.popup').css('left', randPosX);
  $('.popup').css('top', randPosY);
}


$(document).ready(function() {

  $('.sidebar-title-text').fadeOut();
  //마우스 픽셀 흔적
  var $grid = $('.grid-1')
  var $gridItem = $('.grid-1-item')
  var gridItemHeight = $gridItem.height()
  var gridItemWidth = $gridItem.width()
  
  var horzCount = Math.floor($grid.width() / gridItemWidth)
  var vertCount = Math.floor($grid.height() / gridItemHeight)
  
  var totalGridItems = horzCount * vertCount
  for (var i = 0; i < totalGridItems; i++) {
    var $gridItemClone = $gridItem.clone();
    $grid.append($gridItemClone);
  }

  var high= function(){
  $('.grid-1-item').hover(function() {

    $(this).addClass('grid-1-item-highlight');
  });
  }
  high();


    $('.popup-close-btn').click(function () {
      $(this).parents('.popup').hide()
  });

  // $('.popup-content').mouseenter(function () {
  //     $('.arrow2').css({
  //         'top': '-110px'
  //     });
  //     $('.arrow1').animate({
  //         'top': '110px'
  //     }, 250);
  //     $('.arrow2').animate({
  //         'top': '0'
  //     }, 250);
  // });

  // $('.popup-content').mouseleave(function () {
  //     $('.arrow1, .arrow2').css({
  //         'top': '0'
  //     });
  // });

  // $('.popup-open-btn').click(function () {
  //     $('.popup-bottom').css({'display': 'block'});
  //     $('.popup--5').addClass('ex');
  //     $('.popup-m--7').addClass('ex');
  //     $(this).fadeOut(250);
  // });
});

var popupCount = 20;

            $("#draggable1").draggable({
                start: function () {
                    popupCount++;
                    updateCounterStatus($('.popup--1'), popupCount);
                }
            });

            $("#draggable2").draggable({
              start: function () {
                  popupCount++;
                  updateCounterStatus($('.popup--2'), popupCount);
              }
          });

            function updateCounterStatus($event_counter, new_count) {
                if (!$event_counter.hasClass("ui-state-hover")) {
                    $event_counter.addClass("ui-state-hover")
                        .siblings().removeClass("ui-state-hover");
                }

                $event_counter.css('z-index', new_count);
            }

            $('.popup').click(function () {
                var zCount = popupCount++
                $(this).css({
                    'z-index': zCount
                });
            });

