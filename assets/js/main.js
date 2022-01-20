var raceLength = $(".container").css.width;
var startRaceButton = $("#startRaceButton");

startRaceButton.click(function(){
    var horse1 = $("#horse1");
    var horse2 = $("#horse2");
    var horse3 = $("#horse3");
    var horse1Speed = speed;
    var horse2Speed = speed;
    var horse3Speed = speed;
    var speed =  Math.random() * 4;


    if (horse1Speed === 1) {
        horse1.css.marginLeft += "25px";
    }   else if (horse1Speed === 2) {
        horse1.css.marginLeft += "50px";
    }else if (horse1Speed === 3) {
        horse1.css.marginLeft += "75px";
    }else if (horse1Speed === 4) {
        horse1.css.marginLeft += "100px";
    }
    if (horse2Speed === 1) {
        horse2.css.marginLeft += "25px";
    }   else if (horse2Speed === 2) {
        horse2.css.marginLeft += "50px";
    }else if (horse2Speed === 3) {
        horse2.css.marginLeft += "75px";
    }else if (horse2Speed === 4) {
        horse2.css.marginLeft += "100px";
    }
    if (horse3Speed === 1) {
        horse3.css.marginLeft += "25px";
    }   else if (horse3Speed === 2) {
        horse3.css.marginLeft += "50px";
    }else if (horse3Speed === 3) {
        horse3.css.marginLeft += "75px";
    }else if (horse3Speed === 4) {
        horse3.css.marginLeft += "100px";
    }
})

