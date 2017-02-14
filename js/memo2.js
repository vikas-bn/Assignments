var object={'columns': ['id', 'column1', 'column2', 'column3'],
	'order': [1, 3, 2, 4, 7, 5, 11],
	'data': [
		{ 'íd': 1,  'column': 'column1', 'value': 'apple'},
		{ 'íd': 3, 'column': 'column3', 'value': 'iOs'},
		{ 'íd': 2, 'column': 'column1', 'value': 'apple inc'},
		{ 'íd': 2, 'column': 'column2', 'value': 'NextGen'},
		{ 'íd': 4, 'column': 'column1', 'value': 'MS'},
		{ 'íd': 4, 'column': 'column2', 'value': 'Office'},
		{ 'íd': 7, 'column': 'column2', 'value': 'Server'},
		{ 'íd': 5, 'column': 'column3', 'value': '2016'},
		{ 'íd': 5, 'column': 'column2', 'value': null},
		{ 'íd': 11, 'column': 'column3', 'value': 'Android'},
		{ 'íd': 11, 'column': 'column2', 'value': 'OS'},
		{ 'íd': 11, 'column': 'column1', 'value': 'Google'},
		{ 'íd': 4, 'column': 'column3', 'value': ''}
	]
}




function getextractColumnAndValuesFunction(){
  var table = [];
  var count = 0;
  
  return function(dataItem){
      var data = {};
      data['id'] = dataItem.íd;
      data[dataItem.column] = dataItem.value;
    
    if(table[dataItem.íd] != null){
   
      table[dataItem.íd] = Object.assign(table[dataItem.íd],data);
    }
    else{
     
      table[dataItem.íd] = data;	
    }

    count++;
   
    if(count == object.data.length)return table;
  };
}





function getcolCompleteFunction(){
  var prev = { 'column1':'', 'column2':'', 'column3':''};
  return function(obj){
   
 			if(obj.column1 == null) 
        obj.column1 = prev.column1;
    	if(obj.column2 == null)
        obj.column2 = prev.column2;
    	if(obj.column3 == null)
        obj.column3 = prev.column3;
    	prev = Object.assign(prev,obj);

        return obj;
    
  }
}

var extractColumnAndValues = getextractColumnAndValuesFunction();
var modifiedData = object.data.map((item) => {return extractColumnAndValues(item);});
var table = modifiedData.find((item) => {return item != null;});

console.log(object.columns.join(',').replace(/,/g,"\t\t")+'\n\n');

var colComplete = getcolCompleteFunction();
var newtablerows = object.order.map((item) => {return colComplete(table[item])});
newtablerows.forEach((item) => {console.log(item.id+"\t\t"+item.column1+"\t\t"+item.column2+"\t\t"+item.column3+'\n\n');});    
  
  
  
  
  
