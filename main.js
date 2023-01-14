function intro(){
    introduction = document.getElementById("nameIntro");
    setTimeout(printIntro, 300); //add a bit of delay before starting the typing animation
}

var i = 0;
var content = "Hi! I'm Cayden."
var speed = 100;
var firstIteration = true;

function printIntro(){
    introduction = document.getElementById("nameIntro");
    if(firstIteration){
        introduction.innerHTML = "";
        firstIteration = false;
    }
    introduction.innerHTML += content.charAt(i);
    i++;
    if(i == 3){
        speed = 300;
    }else{
        speed = 100;
    }
    setTimeout(printIntro, speed);
}