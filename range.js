function range(start, end, step=1){
  let Arraylist=[];
  if (typeof end ==='undefined'){
      end =start;
      start=0;
    
  }
  for (let i=start; i<=end; i+=step){
      Arraylist.push(i);
  }
  return Arraylist;

}
console.log(range(10));

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));