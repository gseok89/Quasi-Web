$('.overlay').click(function(){
    $(this).toggleClass("click");
    $('.sidebar').toggleClass("show");
    $('.popup').toggleClass("show");
});
$('.sub-btn').click(function(){
    $('nav ul .sub-show').toggleClass("show");
});

// var body = document.body;

// document.addEventListener('mousemove', (e)=>
// {
//     var elem = document.createElement('div');
//     elem.setAttribute('class', 'trail')
//     elem.setAttribute('style','left: ${e.clientX - 10}px; top: ${e.clientY - 10}px;');

//     elem.onanimationend=()=>
//     {
//         elem.remove();
//     }

//     body.insertAdjacentElement('beforeend',elem);
// });

// let circles = [];
// function createCircle() {
//   for (let x = 0; x < 12; x++) {
//     let c = document.createElement('div');
//     c.classList.add('trail');
//     document.body.appendChild(c);
//     circles.push(c);
//   }
// }
// createCircle();


// let currentCircle = 0;

// function trail(e) {
//   let circle = circles[currentCircle];
//   circle.style.left = `${e.pageX}px`;
//   circle.style.top = `${e.pageY}px`;
//   currentCircle = (currentCircle + 1) % circles.length;
// }

// addEventListener('mousemove', trail);
document.addEventListener('mousemove', circleTrail);

let colors = ['#00FFFF', '#DC143C', '	#7CFC00', '#6A5ACD', '#FF8C00'];

function circleTrail(e) {
  const circle = document.createElement('div');
  circle.className = 'circle';
  document.body.appendChild(circle);
  
  circle.style.left = e.x + 'px';
  circle.style.top = e.y + 'px';
  
//   let color = colors[Math.floor(Math.random() * colors.length)];
//   circle.style.borderColor = color;
  
  circle.style.transition = "all 0.5s linear";
  circle.style.left = circle.offsetLeft - 20 + 'px';
  circle.style.Top = circle.offsetTop - 20 + 'px';
  
  circle.style.width = '30px';
  circle.style.height = '30px';
  circle.style.borderWidth = '2px';
  circle.style.opacity = 0;
  
}

