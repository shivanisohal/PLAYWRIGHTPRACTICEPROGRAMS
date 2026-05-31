let arry = [10, 20, 30, 40, 50];
let s = arry.slice(1, 4);   // [20, 30, 40]
console.log(arry);          // [10, 20, 30, 40, 50]  ← unchanged

let arr = [10, 20, 30, 40, 50];
let removed = arr.splice(1, 2);   // remove 2 from index 1
console.log(removed);             // [20, 30]
console.log(arr);                 // [10, 40, 50]