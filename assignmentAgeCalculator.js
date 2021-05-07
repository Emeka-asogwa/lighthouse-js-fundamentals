

const ageCalculator= function (name,yearOfBirth,currentYear){
  cal= currentYear- yearOfBirth;
  return name +' is '+cal+' years old';
};


//console.log(ageCalculator('Peter',1987,2021));
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));

