var btn = document.getElementsByClassName("btn");
var slide = document.getElementById("slide");
btn[0].onClick = function(){
    slide.style.transform = "translateX(0px)";
}
btn[1].onClick = function(){
    slide.style.transform = "translateX(500px)";
}
btn[2].onClick = function(){
    slide.style.transform = "translateX(1000px)";
}
btn[3].onClick = function(){
    slide.style.transform = "translateX(1500px)";
}