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
  var el1 = $(".grid-1-item");
  for (i=0 ; i<1000 ; i++) {
    var newEl1 = el1.clone();
    $(".grid-1").append(newEl1);
  }
});

