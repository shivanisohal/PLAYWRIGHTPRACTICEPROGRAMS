// Write a program that classifies a triangle based on its side lengths.
//  Given three input values representing the lengths of the sides,
//  determine if the triangle is equilateral (all sides are equal),
//  isosceles (exactly two sides are equal), or scalene (no sides are equal)


let a=30,b=30,c=30;

if(a===b&&b===c)
{
    console.log("equilateral (all sides are equal)");
}
else if(a===b||b===c||c===a)
{
    console.log("isosceles (exactly two sides are equal)");

}
else
{
console.log("scalene (no sides are equal)");
}