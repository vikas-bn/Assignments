var ip= [ [{name: "vinoj"}, {name: "dixy"}], {name: "amala"}, {name: "arjun"}];
var op=[];
for(var i = 0;i < ip.length;i++)
{ 
      if(Array.isArray(ip[i]))
     {	 for(var j=0;j<ip[i].length;j++){
     	    op.push(ip[i][j]);
      	 }
     }
     else op.push(ip[i]);
}
console.log("this is the output array");

for(var j=0;j<op.length;j++)console.log(op[j]);
