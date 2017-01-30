var list=[1,2,3,4];
var sum=list.reduce((acc,item) => acc+item,0);
var mean=sum/list.length;
console.log('the mean is: '+mean);
var varlist=list.map((item)=>{return (mean-item)**2;});
var varsum=varlist.reduce((acc,item) => acc+item,0);
var variance=varsum/varlist.length;
console.log('the variance is: '+variance);
