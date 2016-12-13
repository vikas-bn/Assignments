var audio = new Audio();
var audio1 = new Audio("/home/vikasbn/Downloads/sounds/clap.wav");
var audio2 = new Audio("/home/vikasbn/Downloads/sounds/boom.wav");
var audio3 = new Audio("/home/vikasbn/Downloads/sounds/hihat.wav");
var audio4 = new Audio("/home/vikasbn/Downloads/sounds/kick.wav");
var audio5 = new Audio("/home/vikasbn/Downloads/sounds/openhat.wav");
var audio6 = new Audio("/home/vikasbn/Downloads/sounds/ride.wav");
var audio7 = new Audio("/home/vikasbn/Downloads/sounds/tink.wav");

function playaudio(event){
	var input = event.which;
    audio.pause();
    audio.currentTime=0
    document.getElementById(input+"").style.transform="scale(1.2,1.2)"; 
    document.getElementById(input+"").style.backgroundColor="#90b350";  
    switch(input){
        case 97: audio=audio1;                 
                 break;
        case 98: audio=audio2;                 
                 break;
        case 99: audio=audio3;                 
                 break;
        case 100: audio=audio4;                 
                  break;
        case 101: audio=audio5;                 
                  break;
        case 102: audio=audio6;                 
                break;
        case 103: audio=audio7;                 
                  break;
        default:audio=new Audi();
	}
    
    audio.play();
    setTimeout(removestyle(input), 250);
    function removestyle(input){
       return function(){
        document.getElementById(input+"").style.transform="scale(1,1)";
        document.getElementById(input+"").style.backgroundColor="#0041b2";  
       }
    }
     
}


