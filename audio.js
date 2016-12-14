var audio = new Audio();
var audio1 = new Audio("/home/vikasbn/Downloads/sounds/clap.wav");
var audio2 = new Audio("/home/vikasbn/Downloads/sounds/boom.wav");
var audio3 = new Audio("/home/vikasbn/Downloads/sounds/hihat.wav");
var audio4 = new Audio("/home/vikasbn/Downloads/sounds/kick.wav");
var audio5 = new Audio("/home/vikasbn/Downloads/sounds/openhat.wav");
var audio6 = new Audio("/home/vikasbn/Downloads/sounds/ride.wav");
var audio7 = new Audio("/home/vikasbn/Downloads/sounds/tink.wav");

audio_array=[audio1,audio2,audio3,audio4,audio5,audio6,audio7];
function playaudio(event){
	var input = event.which;
    var curaudio=input-97;    
    audio.pause();
    audio.currentTime=0;
//    document.getElementById(input+"").style.transform="scale(1.2,1.2)"; 
//    document.getElementById(input+"").style.backgroundColor="#90b350";
   
    document.getElementById(input+"").classList.add("active");
    audio=audio_array[curaudio];
    audio.play();
    
    setTimeout(removestyle(input), 250);
    function removestyle(input){
       return function(){
        if(document.getElementById(input+"").classList.contains("active"))
           document.getElementById(input+"").classList.remove("active"); 
       }
    }
     
}


