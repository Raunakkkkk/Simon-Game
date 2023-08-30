var userClickedPattern=[];
var gamepattern=[];
var buttoncolor=["red", "blue", "green", "yellow"];
var level=0;
$(document).keypress(function(){
nextsequence();

});
function restart(){// sabko reset krdo
    level=0;
    gamepattern=[];
}


 function checkAnswer(currentlevel){
    if(gamepattern[currentlevel]=== userClickedPattern[currentlevel]){
        console.log("success");
    
        if (userClickedPattern.length === gamepattern.length){
            setTimeout(function(){
    nextsequence();
    
            },1000);
    
    }
    }
    else{
        $("body").addClass("game-over");

setTimeout(function(){
    $("body").removeClass("game-over");

},200);
$("h1").text("Game Over, Press Any Key to Restart");
restart();

        console.log("wrong");
    }
    }
    



function nextsequence(){
    userClickedPattern=[];// empty araay krdere
var randomnumber=Math.floor(Math.random() * 4) ;
var randomChosenColour=buttoncolor[randomnumber];
gamepattern.push(randomChosenColour);
$("#"+randomChosenColour).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50);
playsound(randomnumber);
level++;
$("h1").text("level "+level);


}
$(".btn").click(function(){

    userChosenColour=$(this).attr("id");// this will give id of the button user clicked
    userClickedPattern.push(userChosenColour);
    playsound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
    console.log(userClickedPattern);


});






function playsound(nam){
    var x = new Audio("sounds/" + nam + ".mp3");
    x.play();
}
function animatePress(currentColor) {

    $("#" + currentColor).addClass("pressed");
  
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }