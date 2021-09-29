
//오버레이 클릭 시 이벤트
$('.overlay').click(function(){
    $(this).toggleClass("click");
    $('.sidebar').toggleClass("show");
    TitleFade();
    // randPos();
    removeElementsByClass("dot");
});

function removeElementsByClass(className){
  var elements = document.getElementsByClassName(className);
  while(elements.length > 0){
      elements[0].parentNode.removeChild(elements[0]);
  }
}

$('.sub-btn').click(function(){
    $('nav ul .sub-show').toggleClass("show");
});

$(".menu-v1").click(function(){
  $(this).children(".submenu").stop().slideDown(); 
});

$(".contents").click(function(){
  $(this).children(".text").stop().slideDown(); 
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
  // var $grid = $('.grid-1')
  // var $gridItem = $('.grid-1-item')
  // var gridItemHeight = $gridItem.height()
  // var gridItemWidth = $gridItem.width()
  
  // var horzCount = Math.floor($grid.width() / gridItemWidth)
  // var vertCount = Math.floor($grid.height() / gridItemHeight)
  
  // var totalGridItems = horzCount * vertCount
  // for (var i = 0; i < totalGridItems; i++) {
  //   var $gridItemClone = $gridItem.clone();
  //   $grid.append($gridItemClone);
  // }

  // var high= function(){
  // $('.grid-1-item').hover(function() {
  //   console.log('추가?');
  //   $(this).addClass('grid-1-item-highlight');
  // });
  // }
  // high();

//   $('*').not('.popup').not('.sidebar').each(function() {
//     $(this).mousemove(function(e) {

//         // we need to hide the #glass prior to setting the currentNode, otherwise the currentNode will be the #glass itself            
//         $('.popup').hide();
//         $('.sidebar').hide();
//         currentNode = document.elementFromPoint(e.clientX, e.clientY);
//         $('.popup').show();
//         $('.sidebar').show();

//         // write currentNode id to show its working
//         // $('span b').html(currentNode);
//         // console.log(currentNode);

//         // currentNode.classList.add('grid-1-item-highlight');
//     });
// });

  // $(document).click(function(e){
  //   console.log("옵니까?" + event.);
  //   document.getElementsByClassName("grid-1-item")
  //   $('.grid-1-item').addClass('grid-1-item-highlight');
  //   document.querySelectorAll()
  //   var x = e.clientX, y = e.clientY,
  //       elementMouseIsOver = document.elementsFromPoint(x, y);

  //       console.log(elementMouseIsOver);

  // });

    $('.popup-close-btn').click(function () {
      $(this).parents('.popup').hide()
  });

  //마우스 움직이면서 포지션 좌표에 타겟 중에 grid-1-item에 하이라이트 클래스 추가하기

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

  onmousemove = function(e){

    var pos = e;
    var dot;
    dot = document.createElement('div');
    dot.className = "dot";
    dot.style.left = pos.x + "px";
    dot.style.top = pos.y + "px";
    document.body.appendChild(dot);
}      


$.sidebarMenu = function(menu) {
  var animationSpeed = 300,
    subMenuSelector = '.sidebar-submenu';

  $(menu).on('click', 'li a', function(e) {
    var $this = $(this);
    var checkElement = $this.next();

    if (checkElement.is(subMenuSelector) && checkElement.is(':visible')) {
      checkElement.slideUp(animationSpeed, function() {
        checkElement.removeClass('menu-open');
      });
      checkElement.parent("li").removeClass("active");
    }

    //If the menu is not visible
    else if ((checkElement.is(subMenuSelector)) && (!checkElement.is(':visible'))) {
      //Get the parent menu
      var parent = $this.parents('ul').first();
      //Close all open menus within the parent
      var ul = parent.find('ul:visible').slideUp(animationSpeed);
      //Remove the menu-open class from the parent
      ul.removeClass('menu-open');
      //Get the parent li
      var parent_li = $this.parent("li");

      //Open the target menu and add the menu-open class
      checkElement.slideDown(animationSpeed, function() {
        //Add the class active to the parent li
        checkElement.addClass('menu-open');
        parent.find('li.active').removeClass('active');
        parent_li.addClass('active');
      });
    }
    //if this isn't a link, prevent the page from being redirected
    if (checkElement.is(subMenuSelector)) {
      e.preventDefault();
    }
  });
}

$.sidebarMenu($('.sidebar-menu'))