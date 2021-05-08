function merge(a,b){
  let c = [];
  for(i = 0;i<a.length; i ++){
    //console.log(a[i])
    c.push(a[i]);
  }
  for (j = 0;j < b.length;j ++){
      c.push(b[j]);
    } 
  return c.sort();
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);