// var horse1 = $("#horse1");
// var horse2 = $("#horse2");
// var horse3 = $("#horse3");
// var horse4 = $("#horse4");
var startRaceButton = $("#startRaceButton");
var horseId = 0;
var validateHorseNumber = $('#validateHorseNumber');

validateHorseNumber.click(function(){
console.log("clicked1")
var selectHorseNumber = $("#selectHorseNumber");
    
    
    for (var horseId = 0; horseNumber <= selectHorseNumber.val(); horseId++){
        
        var background = $('#background');
        background.append('<div class = "horses" id = "horse' + horseId + '">' + '</div>');
        var horseImage = $('#horse' + horseId);
        horseImage.append('<img src="assets/img/cheval1.png"/>');
    }
})

    


startRaceButton.click(function() {
    console.log("clicked2");
    
    // var horse1Speed = Math.floor(Math.random() * 100);
    // var horse2Speed = Math.floor(Math.random() * 100);
    // var horse3Speed = Math.floor(Math.random() * 100);
    // var horse4Speed = Math.floor(Math.random() * 100);

    // horse1.css("marginLeft", horse1Speed + "%");
    // horse2.css("marginLeft", horse2Speed + "%");
    // horse3.css("marginLeft", horse3Speed + "%");
    // horse4.css("marginLeft", horse4Speed + "%");
})