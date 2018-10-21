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
    
    obj.firstName=element[0];
    obj.lastName=element[1];
    
    result.push(Object.assign({},obj));
  }
  return result;
  
}



function attributesToPhrase(obj) {
  
      for (const key in obj) {
        console.log('')
      }
  
   it('converts to list saying the name and where each individual is from', () => {
      const drivers = [
        { name: 'Bobby', hometown: 'Pittsburgh' },
        { name: 'Sammy', hometown: 'New York' },
        { name: 'Sally', hometown: 'Cleveland' },
        { name: 'Annette', hometown: 'Los Angeles' },
        { name: 'Bobby', hometown: 'Tampa Bay' }
      ];

      expect(attributesToPhrase(drivers)).to.eql([
        'Bobby is from Pittsburgh',
        'Sammy is from New York',
        'Sally is from Cleveland',
        'Annette is from Los Angeles',
        'Bobby is from Tampa Bay'
      ]);
  
  
}