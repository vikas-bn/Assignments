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