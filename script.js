var picker=document.querySelectorAll(".box");
// const links=document.querySelector("#links")
var urls = ['http://127.0.0.1:5500/earth/first.html',
     'file:///E:/practice%20oly/ankit.html',
    'file:///E:/ankit/v%20s%20code%20files/html&css/amazon%20clone/amazon.html',
    'file:///E:/ankit/v%20s%20code%20files/html&css/restaurant/restaurant.html',
    'file:///E:/ankit/v%20s%20code%20files/html&css/visual%20basic/index.html'

];
picker.forEach(function(div,index){
     div.addEventListener("click",function() {
          window.location.href = urls[index];
     });

});

