function down(event){
  event && event.preventDefault(); document.getElementById("download__container").style.display="flex";
    
}
function downOk(event){
   
  if(event.target.id == "download__box") return;
event && event.stopPropagation();
    document.getElementById("download__container").style.display="none";
    
}