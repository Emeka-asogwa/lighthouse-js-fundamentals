const amounts = [61.00, 52.25, 112.99, 5.00]; 

let total = 0;
for (let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}
console.log('Order total is: ', total);


//// -------Second method // With the for..of syntax, we don't have to start and manage an array index i and then use that index to access each item in the array (amounts[i]). We don't care about the index, we really just want to go through each item in the array. 


let total2 = 0;
for (let amount of amounts) {
  total2 += amount;
}
console.log('Order total is: ', total2);