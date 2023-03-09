var introContent = "Hi! I'm Cayden."
var introLen = introContent.length;
var introSpeed = 100;
var totalIntroSpeed = introLen*introSpeed+200;
var delayBetweenIntroAndSubIntro = 500;

var i = 0;
var introFirstIteration = true;

var k = 0;
var subIntroContent = "I'm a Data Science and Computer Science student at the University of Wisconsin - Madison."
var subIntroSpeed = 50;
var subIntroFirstIteration = true;

var totalIntroAndSubIntroSpeed = totalIntroSpeed + subIntroContent.length * subIntroSpeed + delayBetweenIntroAndSubIntro;


function printIntro(){
    introduction = document.getElementById("nameIntro");
    if(introFirstIteration){
        introduction.innerHTML = "";
        introFirstIteration = false;
    }
    introduction.innerHTML += introContent.charAt(i);
    i++;
    if(i == 3){
        introSpeed = 300;
    }else{
        introSpeed = 100;
    }
    if(i < introContent.length){
        setTimeout(printIntro, introSpeed);
    }
}

function printSubIntro(){
    subIntroduction = document.getElementById("subIntro");
    if(subIntroFirstIteration){
        subIntroduction.innerHTML = "";
        subIntroFirstIteration = false;
    }
    subIntroduction.innerHTML += subIntroContent.charAt(k);
    k++;
    if(k < subIntroContent.length){
        setTimeout(printSubIntro, subIntroSpeed);
    }
}

function showRemainderOfHomepage(){
    remainder = document.getElementById("remainder");
    remainder.style.display = "block";
}

function intro(){
    introduction = document.getElementById("nameIntro");
    setTimeout(printIntro, 300); //add a bit of delay before starting the typing animation
    setTimeout(printSubIntro, totalIntroSpeed + delayBetweenIntroAndSubIntro);
    setTimeout(showRemainderOfHomepage, totalIntroAndSubIntroSpeed + 1000);
}