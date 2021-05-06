const whichSchool  = function (age){
  if (age<13){
    elemen= console.log('Elementary School')
    return elemen;
  }else if (age>=13 && age<=18){
    secon=console.log('Secondary School')
    return secon;
  }else{
    Lig=console.log('Lighthouse Labs')
    return Lig;
  }
};
console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
