$('.overlay').click(function(){
    $(this).toggleClass("click");
    $('.sidebar').toggleClass("show");
    randPos();
    // $('.popup').toggleClass("show");
});
$('.sub-btn').click(function(){
    $('nav ul .sub-show').toggleClass("show");
});

//랜덤 팜업 함수
function randPos(){
  var bodyWidth = $('.overlay-left').width();
  var bodyHeight = $('.overlay-left').height();
  var randPosX = Math.floor((Math.random()*bodyWidth));
  var randPosY = Math.floor((Math.random()*bodyHeight));
  
  $('.popup').css('left', randPosX);
  $('.popup').css('top', randPosY);
}

//마우스 트레일
// document.addEventListener('mousemove', circleTrail);

// let colors = ['#00FFFF', '#DC143C', '	#7CFC00', '#6A5ACD', '#FF8C00'];

// function circleTrail(e) {
//   const circle = document.createElement('div');
//   circle.className = 'circle';
//   document.body.appendChild(circle);
  
//   circle.style.left = e.x + 'px';
//   circle.style.top = e.y + 'px';
  
// //   let color = colors[Math.floor(Math.random() * colors.length)];
// //   circle.style.borderColor = color;
  
//   circle.style.transition = "all 0.5s linear";
//   circle.style.left = circle.offsetLeft - 20 + 'px';
//   circle.style.Top = circle.offsetTop - 20 + 'px';
  
//   circle.style.width = '30px';
//   circle.style.height = '30px';
//   circle.style.borderWidth = '2px';
//   circle.style.opacity = 0;
  
// }

$(document).ready(function() {
  // var el1 = $(".grid-1-item");
  // for (i=0 ; i<1000 ; i++) {
  //   var newEl1 = el1.clone();
  //   $(".grid-1").append(newEl1);
  // }

  // var gridNumber=16
  // var gridSize=600/gridNumber;

  // var $grid = $('#box')
  // var $gridItem = $('.grid')
  // var gridItemHeight = $gridItem.height()
  // var gridItemWidth = $gridItem.width()
  
  // var horzCount = Math.floor($grid.width() / gridItemWidth)
  // var vertCount = Math.floor($grid.height() / gridItemHeight)
  
  // var totalGridItems = horzCount * vertCount



  // /*populate with divs*/

  // var func= function(){
  //   for(var i=0; i<totalGridItems;i++) {
  // $('#box').append("<div class ='grid'></div>");

  // }

  // }

  // func();


  // var high= function(){
  // $('.grid').hover(function() {
  // /*
  //   $('.highlight').css({backround-color:"#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6)"});
  // */
  //   $(this).addClass('highLight');
  // });
  // }
  // high();


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
});

