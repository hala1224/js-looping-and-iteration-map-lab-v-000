// Code your solution in this file.

function lowerCaseDrivers(arr) {
  
  const lowerCase = arr.map(x => x.toLowerCase());

  return lowerCase;
  
}

function nameToAttributes(arr) {

  const obj={};
  
  const newArr = arr.map(x => x.split(' ')[0]);
  return newArr;
  

  
  
}



function attributesToPhrase(obj) {
  
  
}