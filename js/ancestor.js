var peopleTree = {
 "sandeep": "shashi",
 "nanha": "shashi",
 "harish": "nanha",
 "divya": "harish",
 "arjun": "sandeep",
 "shashi": "vinoj",
 "vishal": "divya"
}

var ages = {
 'sandeep': 23,
 'shashi': 26,
 'nanha': 22,
 'harish': 24,
 'divya': 30,
 'arjun': 25,
 'vinoj': 26,
 'vishal': 5
}
class Person{
  name;
  ancestors_tree;
  ancestors_age;
  constructor (name,peopleTree,ages){
    this.name=name;
    this.ancestors_tree=peopleTree;
    this.ancestors_age=ages;
  }
getAncestors(){
    var ancestors=[];
    ancestors.push(this.name);
  	var key=this.name; 
    while(key in this.ancestors_tree){
      ancestors.push(this.ancestors_tree[key]);
      key=this.ancestors_tree[key];
    }    
 		return ancestors;
  }
 getAncestorsAge(){ 
    var age=[];
    age.push(ages[this.name]);
    var key=this.name;
    while(key in this.ancestors_tree){
      age.push(ages[this.ancestors_tree[key]]);
      key=this.ancestors_tree[key];
    }
     return age;
  }
}
var san=new Person('sandeep',peopleTree,ages);
console.log(san.getAncestors());
console.log(san.getAncestorsAge());
