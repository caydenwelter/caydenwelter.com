var i = 0;
var content = "Hi! I'm Cayden."
var speed = 100;

function intro(){
    introduction = document.getElementById("nameIntro");
    introduction.innerHTML += content.charAt(i);
    i++;
    if(i == 3){
        speed = 300;
    }else{
        speed = 100;
    }
    setTimeout(intro, speed);
}