function fn(){
	var cache={};
  var keys=['name','id','address','phone','employeeId'];
  return function(object){
    cache=Object.assign(cache,object);  
    if(keys.every((key)=>{ return key in cache;}))return cache;
  };
  
}
var reminisce=fn();
console.log(reminisce({name:'vinoj'}));
console.log(reminisce({id:1}));
console.log(reminisce({ address: 'address' }));
console.log(reminisce({ phone: '9009891232' }));
console.log(reminisce({ employeeId: '1' }) );
