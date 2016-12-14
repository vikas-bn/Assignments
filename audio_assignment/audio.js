var x=0;
var y=0;
var z=0;
function setCurrentTime()
{
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    x=s*6;
    y=(m*6)+(s*0.1);
    h=h%12;
    z=(h*30)+(0.5*m)+(s*(3/360));
        
    document.getElementById("second").style.transform="rotate("+x+"deg)";   document.getElementById("second").style.transformOrigin="bottom";
    
    document.getElementById("minute").style.transform="rotate("+y+"deg)";   
    document.getElementById("minute").style.transformOrigin="bottom";
    
    document.getElementById("hour").style.transform="rotate("+z+"deg)";   
    document.getElementById("hour").style.transformOrigin="bottom";


}
//function incrementSecond()
//{  
//    x=x+6;    
//    document.getElementById("second").style.transform="rotate("+x+"deg)";    document.getElementById("second").style.transformOrigin="bottom";
//   
//}
//function incrementMinute()
//{   
//    y=y+6;  
//    document.getElementById("minute").style.transform="rotate("+y+"deg)";   
//    document.getElementById("minute").style.transformOrigin="bottom";
//
//}
//function incrementHour()
//{   
//    z=z+0.5;  
//    document.getElementById("hour").style.transform="rotate("+z+"deg)";   
//    document.getElementById("hour").style.transformOrigin="bottom";
//
//}
function clocktime()
{
  //  setCurrentTime();
    setInterval(setCurrentTime,1000);
//    setInterval(incrementMinute,60000);
//     setInterval(incrementMinute,3600000);
}
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
   
    document.getElementById(input+"").classList.add("audio-names__element--active");
    audio=audio_array[curaudio];
    audio.play();
    
    setTimeout(removestyle(input), 250);
    function removestyle(input){
       return function(){
        if(document.getElementById(input+"").classList.contains("audio-names__element--active"))
           document.getElementById(input+"").classList.remove("audio-names__element--active"); 
       }
    }
     
}


