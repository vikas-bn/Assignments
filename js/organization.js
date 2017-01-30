var people = [{
 name: 'Sandeep',
 empId: 0,
 age: 23,
 orgId: 1
}, {
 name: 'Arjun',
 empId: 1,
 age: 25,
 orgId: 2
}, {
 name: 'Nanha',
 empId: 3,
 age: 22,
 orgId: 1
}, {
 name: 'Nandu',
 empId: 4,
 age: 53,
 orgId: 3
}];

var organizations = [{
 name: 'Razorthink',
 id: 1,
 employees: [0, 3]
}, {
 name: 'Apple',
 id: 2,
 employees: [1]
}, {
 name: 'Microsoft',
 id: 3,
 employees: [4]
}];

function getEmpDetails(id){
  var emp;
  for(var i=0;i<people.length;i++){
    if(people[i].empId==id){
      emp=people[i];break;
    }
  }
   for(var j=0;j<organizations.length;j++){
     if(organizations[j].id==emp.orgId){
       emp.orgName=organizations[j].name;
      }
   }
  return emp;
}
console.log(getEmpDetails(4));







var people = [{
 name: 'Sandeep',
 empId: 0,
 age: 23,
 orgId: 1
}, {
 name: 'Arjun',
 empId: 1,
 age: 25,
 orgId: 2
}, {
 name: 'Nanha',
 empId: 3,
 age: 22,
 orgId: 1
}, {
 name: 'Nandu',
 empId: 4,
 age: 53,
 orgId: 3
}];

var organizations = [{
 name: 'Razorthink',
 id: 1,
 employees: [0, 3]
}, {
 name: 'Apple',
 id: 2,
 employees: [1]
}, {
 name: 'Microsoft',
 id: 3,
 employees: [4]
}];
/*
var employees=people.map((item)=>{ 
  for(var j=0;j<organizations.length;j++){
     if(organizations[j].id==item.orgId){
        item.orgName=organizations[j].name;
      }
     return item;
  }
});*/
var emp;
var employees=people.map((item)=>{ 
       emp=item; item.orgName=organizations.find(getOrg).name;
        return item;
 });
function getOrg(org){ return org.id==emp.orgId; }

for(var i=0;i<employees.length;i++){
  console.log(employees[i]);
}
/*
function getEmpDetails(id){
  var emp;
  for(var i=0;i<people.length;i++){
    if(people[i].empId==id){
      emp=people[i];break;
    }
  }
   for(var j=0;j<organizations.length;j++){
     if(organizations[j].id==emp.orgId){
       emp.orgName=organizations[j].name;
      }
   }
  return emp;
}
console.log(getEmpDetails(4));

*/







var people = [{
 name: 'Sandeep',
 empId: 0,
 age: 23,
 orgId: 1
}, {
 name: 'Arjun',
 empId: 1,
 age: 25,
 orgId: 2
}, {
 name: 'Nanha',
 empId: 3,
 age: 22,
 orgId: 1
}, {
 name: 'Nandu',
 empId: 4,
 age: 53,
 orgId: 3
}];

var organizations = [{
 name: 'Razorthink',
 id: 1,
 employees: [0, 3]
}, {
 name: 'Apple',
 id: 2,
 employees: [1]
}, {
 name: 'Microsoft',
 id: 3,
 employees: [4]
}];

var employee=people.map((item)=>{ 
     item.orgName=organizations.find(org => getOrg(org, item)).name;
        return item;
 });
function getOrg(org,emp){ return org.id==emp.orgId; }
/*
for(var i=0;i<employee.length;i++){
  console.log(employee[i]);
}*/

function getEmpDetails(empid){
  return employee.find(emp=>getEmp(emp,empid));
}
function getEmp(emp,id){
  return emp.empId==id;
}




function getOrgDetails(id){
  return getOrganization(id);
	
}
function getOrganization(orgid){
  return organizations.find((item)=> organization(item,orgid));
}
function organization(item,id){
  return item.id==id;
}
/*
console.log(getEmpDetails(4));*/

var orgCompleteDetails=organizations.map((item)=>{
  					var emps=item.employees;
  				item.empnames=emps.map((em)=>{
                         return getEmpDetails(em).name;});
                          
  				item.empages=emps.map(function(em){
                          return getEmpDetails(em).age;
                           });
  return item;
});
orgCompleteDetails.forEach((item)=>console.log(item));




