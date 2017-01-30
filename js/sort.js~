var ip= [ { title: "E", checked: false },  {
  title: "A", checked: false },
  { title: "B", checked: true },
  { title: "C", checked: false },
  { title: "F", checked: true } ,
         { title: "D", checked: false }

 ];

ip.sort(function(a,b){  var nameA=Number(!a.checked)+a.title.toLowerCase(), nameB=Number(!b.checked)+b.title.toLowerCase(); 
        if(nameA < nameB)
         return -1; 
        if (nameA > nameB)
         return 1;
      return 0;});

console.log('the array after sorting is');
for(var i=0;i<ip.length;i++)
 {
   console.log(ip[i]);
 }

