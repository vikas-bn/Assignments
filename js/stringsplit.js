var ip=["vinoj, arjun,vikas", "dixy,kuamr", "amala"];
var op=[];
for(var i = 0;i < ip.length;i++)
{ 
    var index=ip[i].split(',');
    if(index.length>1)
     {	 for(var j=0;j<index.length;j++){
     	    op.push(index[j]);
    	 }
     }
     else op.push(ip[i]);
}
console.log("this is the output array");
console.log(ip.split(','));
