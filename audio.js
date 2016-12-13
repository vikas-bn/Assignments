var audio = new Audio();
var audio3 = new Audio("/home/vikasbn/Downloads/sounds/clap.wav");
var audio1 = new Audio("/home/vikasbn/Downloads/sounds/bg.mp3");
var audio2 = new Audio("/home/vikasbn/Downloads/sounds/darling.mp3");

function playaudio(event){
	var input = event.which;
    audio.pause();
    audio.currentTime=0
         document.getElementById(input+"").style.border="10px solid white";  
    document.getElementById(input+"").style.backgroundColor="#90b350";  
	switch(input){
        case 97: audio=audio1;
                   
                      
            break;
        case 98:audio=audio2;
            
            break;
        case 99:audio=audio3;
             
            break;
        default:audio=new Audio();
	}
    audio.play();
    setTimeout(removestyle(input), 250);
   function removestyle(input){
       return function(){
        document.getElementById(input+"").style.border="none";
        document.getElementById(input+"").style.backgroundColor="#0041b2";  
    }
   }

    
     
}


