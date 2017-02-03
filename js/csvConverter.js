var csv = require('csv-parser')
var fs = require('fs')
var stream=csv(['name','desc','price','quantity']);
var output=[];
fs.createReadStream('oldDb.csv')
    .pipe(stream)
    .on('data', function (data) {

        output.push(data);

    }) .on('end', function () {

    output.shift();
    var outputTree=output.reduce((acc,item)=>{
        var obj=[];
        if(item.name in acc)
              obj= acc[item.name];
        obj.push({desc:item.desc,price:item.price,quantity:item.quantity});
        object={};
        object[item.name]=obj;
        Object.assign(acc,object);
        return acc;
     },{});
    console.log(outputTree);
})

