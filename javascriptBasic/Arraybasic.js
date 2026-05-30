let name=["shivani","sohal","shubham"];
console.log(name[0]);

name.push("vivek");
console.log(name[3]);

//changing array element
name[0]="SIVANI";
console.log(name[0]);
//arrray length
console.log(name.length);
//addd element at the end - PUSH
name.push("PushLast");
console.log(name);
//Add element at the begining - UNSHIFT
name.unshift("UnshiftStart");
console.log(name);
//remove element from end - POP
name.pop();
console.log(name);
//remove element from start - SHIFT
name.shift();
console.log(name);
