let name=["name1", "name2","name3","name4"];

for(let i=0;i<name.length;i++)
{
    console.log(name[i]);
}
//using for..of loop

let fruit=["apple","banana","orange"];
for(let fruits of fruit)
{
    console.log(fruits);
}

let fruits = ["Apple", "Banana", "Mango"];

for(let fruit of fruits)
{
    console.log(fruit);
}
//check if value exists or not with INCLUDE()
console.log(fruits.includes("Applee"));

fruits.splice(0,1);
console.log(fruits);