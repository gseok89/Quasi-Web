
//오버레이 클릭 시 이벤트
$('.overlay').click(function(){
    $(this).toggleClass("click");
    $('.sidebar').toggleClass("show");
    TitleFade();

    // randPos();
   // removeElementsByClass("dot");
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
    $('.title-text').fadeIn();
    InitSidebar();

    isOpen = false;
  }
  else
  {
    $('.sidebar-title-text').delay(400).fadeIn();
    $('.title-text').fadeOut();
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

var popupCount = 40;

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

            $("#draggable3").draggable({
              start: function () {
                  popupCount++;
                  updateCounterStatus($('.popup--3'), popupCount);
              }
          });

          $("#draggable4").draggable({
            start: function () {
                popupCount++;
                updateCounterStatus($('.popup--4'), popupCount);
            }
        });
        $("#draggable5").draggable({
          start: function () {
              popupCount++;
              updateCounterStatus($('.popup--5'), popupCount);
          }
      });
        $("#draggable6").draggable({
          start: function () {
              popupCount++;
              updateCounterStatus($('.popup--6'), popupCount);
          }
      });
        $("#draggable7").draggable({
          start: function () {
              popupCount++;
              updateCounterStatus($('.popup--7'), popupCount);
          }
      });
        $("#draggable8").draggable({
          start: function () {
              popupCount++;
              updateCounterStatus($('.popup--8'), popupCount);
          }
      });
        $("#draggable9").draggable({
          start: function () {
              popupCount++;
              updateCounterStatus($('.popup--9'), popupCount);
          }
      });
        $("#draggable10").draggable({
          start: function () {
              popupCount++;
              updateCounterStatus($('.popup--10'), popupCount);
          }
      });
        $("#draggable11").draggable({
          start: function () {
              popupCount++;
              updateCounterStatus($('.popup--11'), popupCount);
          }
      });
        $("#draggable12").draggable({
          start: function () {
              popupCount++;
              updateCounterStatus($('.popup--12'), popupCount);
          }
      });
        $("#draggable13").draggable({
          start: function () {
              popupCount++;
              updateCounterStatus($('.popup--13'), popupCount);
          }
      });
        $("#draggable14").draggable({
          start: function () {
              popupCount++;
              updateCounterStatus($('.popup--14'), popupCount);
          }
      });
        $("#draggable15").draggable({
          start: function () {
              popupCount++;
              updateCounterStatus($('.popup--15'), popupCount);
          }
      });
        $("#draggable16").draggable({
          start: function () {
              popupCount++;
              updateCounterStatus($('.popup--16'), popupCount);
          }
      });
      $("#draggable17").draggable({
        start: function () {
            popupCount++;
            updateCounterStatus($('.popup--17'), popupCount);
        }
    });
      $("#draggable18").draggable({
        start: function () {
            popupCount++;
            updateCounterStatus($('.popup--18'), popupCount);
        }
    });
      $("#draggable19").draggable({
        start: function () {
            popupCount++;
            updateCounterStatus($('.popup--19'), popupCount);
        }
    });
      $("#draggable20").draggable({
        start: function () {
            popupCount++;
            updateCounterStatus($('.popup--20'), popupCount);
        }
    });
      $("#draggable21").draggable({
        start: function () {
            popupCount++;
            updateCounterStatus($('.popup--21'), popupCount);
        }
    });
      $("#draggable22").draggable({
        start: function () {
            popupCount++;
            updateCounterStatus($('.popup--22'), popupCount);
        }
    });
      $("#draggable23").draggable({
        start: function () {
            popupCount++;
            updateCounterStatus($('.popup--23'), popupCount);
        }
    });
      $("#draggable24").draggable({
        start: function () {
            popupCount++;
            updateCounterStatus($('.popup--24'), popupCount);
        }
    });
      $("#draggable25").draggable({
        start: function () {
            popupCount++;
            updateCounterStatus($('.popup--25'), popupCount);
        }
    });
      $("#draggable26").draggable({
        start: function () {
            popupCount++;
            updateCounterStatus($('.popup--26'), popupCount);
        }
    });
      $("#draggable27").draggable({
        start: function () {
            popupCount++;
            updateCounterStatus($('.popup--27'), popupCount);
        }
    });
      $("#draggable28").draggable({
        start: function () {
            popupCount++;
            updateCounterStatus($('.popup--28'), popupCount);
        }
    });
      $("#draggable29").draggable({
        start: function () {
            popupCount++;
            updateCounterStatus($('.popup--29'), popupCount);
        }
    });
      $("#draggable30").draggable({
        start: function () {
            popupCount++;
            updateCounterStatus($('.popup--30'), popupCount);
        }
    });
      $("#draggable31").draggable({
        start: function () {
            popupCount++;
            updateCounterStatus($('.popup--31'), popupCount);
        }
    });
      $("#draggable32").draggable({
        start: function () {
            popupCount++;
            updateCounterStatus($('.popup--32'), popupCount);
        }
    });
      $("#draggable33").draggable({
        start: function () {
            popupCount++;
            updateCounterStatus($('.popup--33'), popupCount);
        }
    });
      $("#draggable34").draggable({
        start: function () {
            popupCount++;
            updateCounterStatus($('.popup--34'), popupCount);
        }
    });
      $("#draggable35").draggable({
        start: function () {
            popupCount++;
            updateCounterStatus($('.popup--35'), popupCount);
        }
    });
      $("#draggable36").draggable({
        start: function () {
            popupCount++;
            updateCounterStatus($('.popup--36'), popupCount);
        }
    });
      $("#draggable37").draggable({
        start: function () {
            popupCount++;
            updateCounterStatus($('.popup--37'), popupCount);
        }
    });
      $("#draggable38").draggable({
        start: function () {
            popupCount++;
            updateCounterStatus($('.popup--38'), popupCount);
        }
    });
      $("#draggable39").draggable({
        start: function () {
            popupCount++;
            updateCounterStatus($('.popup--39'), popupCount);
        }
    });
      $("#draggable44").draggable({
        start: function () {
            popupCount++;
            updateCounterStatus($('.popup--44'), popupCount);
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
    contentMenuSelector = '.sidebar-content';

  $(menu).on('click', 'li a', function(e) {
    var $this = $(this);
    var checkElement = $this.next();

    if (checkElement.is(subMenuSelector) && checkElement.is(':visible')) {
      checkElement.slideUp(animationSpeed, function() {
        checkElement.removeClass('menu-open');
      });
      checkElement.parent("li").removeClass("active");

      ClosePopup();

    }

    //If the menu is not visible
    else if (checkElement.is(subMenuSelector) && !checkElement.is(':visible')) {
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

      ClosePopup();
    }
    //if this isn't a link, prevent the page from being redirected
    if (checkElement.is(subMenuSelector)) {
      e.preventDefault();
    }



    //임시 2
    if (checkElement.is(contentMenuSelector) && checkElement.is(':visible')) {
      checkElement.slideUp(animationSpeed, function() {
        checkElement.removeClass('menu-open');
      });
      checkElement.parent("li").removeClass("active");

      
    }

    //If the menu is not visible
    else if ((checkElement.is(contentMenuSelector)) && (!checkElement.is(':visible'))) {
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

      //사이드바 서브 메뉴 (일기)의 종류 및 아이디 체크하여 팝업 호출하기
      OpenPopup($this.text());
    }
    //if this isn't a link, prevent the page from being redirected
    if (checkElement.is(contentMenuSelector)) {
      e.preventDefault();
    }
  });
}

$.sidebarMenu($('.sidebar-menu'))

function InitSidebar()
{
  var animationSpeed = 300;

  var initSubMenu = $('.sidebar-submenu');
  var initContentMenu = $('.sidebar-content');

  if (initSubMenu.is(':visible')) {
    initSubMenu.slideUp(animationSpeed, function() {
      initSubMenu.removeClass('menu-open');
    });
    initSubMenu.parent("li").removeClass("active");
  }
  //임시 2
  if (initContentMenu.is(':visible')) {
    initContentMenu.slideUp(animationSpeed, function() {
      initContentMenu.removeClass('menu-open');
    });
    initContentMenu.parent("li").removeClass("active");
  }
}

function OpenPopup(targetDate)
{
    switch(targetDate)
    {
      case "SAT. 11 APR. 2026":
        if(!$('.popup--5').is(':visible'))
        {
          $('.popup--5').show();
        }
        break;
      case "SAT. 16 MAY. 2026":
        if(!$('.popup--6').is(':visible'))
        {
          $('.popup--6').show();
        }
      break;
      case "SUN. 17 MAY. 2026":
        if(!$('.popup--7').is(':visible'))
        {
          $('.popup--7').show();
        }
      break;
      case "SUN. 07 JUN. 2026":
        if(!$('.popup--8').is(':visible'))
        {
          $('.popup--8').show();
        }
        if(!$('.popup--9').is(':visible'))
        {
          $('.popup--9').show();
        }
        if(!$('.popup--10').is(':visible'))
        {
          $('.popup--10').show();
        }
      break;
      case "MON. 13 JLY. 2026":
        if(!$('.popup--11').is(':visible'))
        {
          $('.popup--11').show();
        }
      break;
      case "TUE. 14 JLY. 2026":
        if(!$('.popup--12').is(':visible'))
        {
          $('.popup--12').show();
        }
        if(!$('.popup--13').is(':visible'))
        {
          $('.popup--13').show();
        }
      break;
      case "THU. 29 OCT. 2026":
        if(!$('.popup--14').is(':visible'))
        {
          $('.popup--14').show();
        }
      break;
      case "FRI. 04 DEC. 2026":
        if(!$('.popup--15').is(':visible'))
        {
          $('.popup--15').show();
        }
      break;
      case "THU. 18 FAB. 2027":
        if(!$('.popup--16').is(':visible'))
        {
          $('.popup--16').show();
        }
        if(!$('.popup--17').is(':visible'))
        {
          $('.popup--17').show();
        }
        if(!$('.popup--18').is(':visible'))
        {
          $('.popup--18').show();
        }
        if(!$('.popup--19').is(':visible'))
        {
          $('.popup--19').show();
        }
      break;
      case "FRI. 05 MAR. 2027":
        if(!$('.popup--20').is(':visible'))
        {
          $('.popup--20').show();
        }
        if(!$('.popup--21').is(':visible'))
        {
          $('.popup--21').show();
        }
        if(!$('.popup--22').is(':visible'))
        {
          $('.popup--22').show();
        }
      break;
      case "SAT. 10 JLY. 2027":
        if(!$('.popup--23').is(':visible'))
        {
          $('.popup--23').show();
        }
      break;
      case "FRI. 22 JLY. 2027":
        if(!$('.popup--24').is(':visible'))
        {
          $('.popup--24').show();
        }
        if(!$('.popup--25').is(':visible'))
        {
          $('.popup--25').show();
        }
      break;
      case "WED. 01 SEP. 2027":
        if(!$('.popup--26').is(':visible'))
        {
          $('.popup--26').show();
        }
      break;
      case "TUE. 21 DEC. 2027":
        if(!$('.popup--27').is(':visible'))
        {
          $('.popup--27').show();
        }
      break;
      case "FRI. 11 FAB. 2028":
        if(!$('.popup--28').is(':visible'))
        {
          $('.popup--28').show();
        }
        if(!$('.popup--29').is(':visible'))
        {
          $('.popup--29').show();
        }
      break;
      case "SUN. 25 JUN. 2028":
        if(!$('.popup--30').is(':visible'))
        {
          $('.popup--30').show();
        }
        if(!$('.popup--31').is(':visible'))
        {
          $('.popup--31').show();
        }
        if(!$('.popup--32').is(':visible'))
        {
          $('.popup--32').show();
        }
      break;
      case "WED 09 AUG. 2028":
        if(!$('.popup--33').is(':visible'))
        {
          $('.popup--33').show();
        }
        if(!$('.popup--34').is(':visible'))
        {
          $('.popup--34').show();
        }
      break;
      case "TUE. 01 OCT. 2028":
        if(!$('.popup--35').is(':visible'))
        {
          $('.popup--35').show();
        }
        if(!$('.popup--36').is(':visible'))
        {
          $('.popup--36').show();
        }
      break;
      case "MON. 02 JUN. 2036":
        if(!$('.popup--37').is(':visible'))
        {
          $('.popup--37').show();
        }
        if(!$('.popup--38').is(':visible'))
        {
          $('.popup--38').show();
        }
      break;
      case "WED. 25 JUN. 2036":
        if(!$('.popup--39').is(':visible'))
        {
          $('.popup--39').show();
        }
      break;
      case "SAT. 03 JAN. 2037":
        if(!$('.popup--44').is(':visible'))
        {
          $('.popup--44').show();
        }
      break;
    }
}

function ClosePopup()
{
  $('.popup-submenu').hide();
  popupCount = 40;
}

function RemoveWarningMobile()
{
  $('.mobile').remove();
}