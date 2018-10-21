// Code your solution in this file.

function lowerCaseDrivers(arr) {
  
  const lowerCase = arr.map(x => x.toLowerCase());

  return lowerCase;
  
}

function nameToAttributes(arr) {

  const obj={};
  const result=[];
  
  const newArr = arr.map(x => x.split(' '));
  for  (const element of newArr){
    
    obj.firstname=element[0];
    obj.lastName=element[1];
    
    result.push(Object.assign({},obj));
  }
  return result;
  
  

  
  
}



function attributesToPhrase(obj) {
  
  
}