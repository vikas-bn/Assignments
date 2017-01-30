var points = [{x: 1, y: 1 }, {x: -1, y: 1 }, {x: -1, y: -1 }, {x: 1, y: -1 }, {x: 2, y: 2 }, {x: -1, y: 2 }, {x: -1, y: -2 }, {x: 1, y: -2 }, {x: 1, y: 6 }, {x: -1, y: 4 }, {x: -3, y: -1 }, {x: 1, y: -1 }, {x: 10, y: 1 }, {x: -1, y: 11 }, {x: -1, y: -1 }, {x: 1, y: -1 } ]

var maxmag1=0,maxmag2=0,maxmag3=0,maxmag4=0;
  
var vectorobject = points.reduce(function(vectors, point){
    var magnitude = Math.sqrt((point.x**2)+(point.y**2));
     if(point.x*1>0 && point.y*1>0)
     {  
        if(magnitude > maxmag1){
          vectors.first = point;
          maxmag1 = magnitude;
        }
     }
   else if(point.x*-1>0 && point.y*1>0)
     {  
        if(magnitude > maxmag2){
          vectors.second = point;
          maxmag2 = magnitude;
        }
     }
  
   else if(point.x*-1>0 && point.y*-1>0)
     {  
        if(magnitude > maxmag3){
          vectors.third = point;
          maxmag3 = magnitude;
        }
     }
  else 
     {  
        if(magnitude > maxmag4){
          vectors.fourth = point;
          maxmag4 = magnitude;
        }
     }
  return vectors;
} );

 
console.log('this are the vectors');
console.log(vectorobject.first);
console.log(vectorobject.second);
console.log(vectorobject.third);
console.log(vectorobject.fourth);


