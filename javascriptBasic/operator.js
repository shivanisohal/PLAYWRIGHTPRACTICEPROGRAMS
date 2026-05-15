// ============================================================
// JavaScript == (Loose Equality) vs === (Strict Equality)
// ============================================================
// ==  -> Compares values after TYPE COERCION (conversion)
// === -> Compares VALUES and TYPES (no coercion)
// ============================================================

console.log("========== SAME TYPE COMPARISONS ==========");

// Same type, same value -> Both TRUE
console.log(5 == 5);    // true  -> same number
console.log(5 === 5);   // true  -> same number, same type

// Same type, different value -> Both FALSE
console.log(5 == 10);   // false -> different numbers
console.log(5 === 10);  // false -> different numbers

console.log("\n========== NUMBER vs STRING ==========");

// Number vs String -> == does coercion, === does NOT
console.log(5 == "5");    // true  -> string "5" is coerced to number 5
console.log(5 === "5");   // false -> number !== string (different types)

console.log(10 == "10");   // true  -> coercion happens
console.log(10 === "10");  // false -> different types

console.log("\n========== 0, false, '' (Empty String) ==========");

// 0, false, and "" are loosely equal because they coerce to same falsy value
console.log(0 == false);    // true  -> false coerces to 0
console.log(0 === false);   // false -> number !== boolean

console.log(0 == "");       // true  -> empty string coerces to 0
console.log(0 === "");      // false -> number !== string

console.log(false == "");   // true  -> both coerce to 0
console.log(false === "");  // false -> boolean !== string

console.log("\n========== null and undefined ==========");

// null and undefined are ONLY equal to each other with ==
console.log(null == undefined);    // true  -> special case in JS spec
console.log(null === undefined);   // false -> different types

console.log(null == null);         // true  -> same value and type
console.log(null === null);        // true  -> same value and type

console.log(undefined == undefined);   // true  -> same value and type
console.log(undefined === undefined);  // true  -> same value and type

// null does NOT equal 0, false, or "" even with ==
console.log(null == 0);     // false -> null only == undefined
console.log(null === 0);    // false -> different types

console.log(null == false);     // false
console.log(null === false);    // false

console.log("\n========== NaN (Not a Number) ==========");

// NaN is NEVER equal to anything, including itself!
console.log(NaN == NaN);    // false -> NaN is not equal to anything
console.log(NaN === NaN);   // false -> NaN is not equal to anything

// Use isNaN() or Number.isNaN() to check for NaN
console.log(isNaN(NaN));    // true

console.log("\n========== true vs 1 vs '1' ==========");

console.log(true == 1);     // true  -> true coerces to 1
console.log(true === 1);    // false -> boolean !== number

console.log(true == "1");   // true  -> both coerce to 1
console.log(true === "1");  // false -> boolean !== string

console.log(false == 0);    // true  -> false coerces to 0
console.log(false === 0);   // false -> boolean !== number

console.log("\n========== Objects and Arrays ==========");

// Objects are compared by REFERENCE, not content
let obj1 = { a: 1 };
let obj2 = { a: 1 };
let obj3 = obj1;

console.log(obj1 == obj2);   // false -> different memory references
console.log(obj1 === obj2);  // false -> different memory references

console.log(obj1 == obj3);   // true  -> same reference
console.log(obj1 === obj3);  // true  -> same reference

// Array vs Array
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = arr1;

console.log(arr1 == arr2);   // false -> different references
console.log(arr1 === arr2);  // false -> different references

console.log(arr1 == arr3);   // true  -> same reference
console.log(arr1 === arr3);  // true  -> same reference

// Array vs String -> array coerces to string
console.log([1, 2] == "1,2");   // true  -> array becomes "1,2"
console.log([1, 2] === "1,2");  // false -> array !== string

console.log("\n========== Object vs Primitive ==========");

// Object coerces to primitive via toString() or valueOf()
console.log([10] == 10);       // true  -> [10].toString() -> "10" -> 10
console.log([10] === 10);      // false -> array !== number

console.log("\n========== SPECIAL CASES ==========");

console.log("" == false);      // true  -> empty string coerces to 0, false to 0
console.log("" === false);     // false -> string !== boolean

console.log(" " == false);     // true  -> space string coerces to 0, false to 0
console.log(" " === false);    // false -> string !== boolean

console.log([] == false);      // true  -> [].toString() -> "" -> 0, false -> 0
console.log([] === false);     // false -> array !== boolean

console.log([0] == false);     // true  -> [0].toString() -> "0" -> 0, false -> 0
console.log([0] === false);    // false -> array !== boolean

console.log("\n========== SUMMARY ==========");
console.log("Use === (Strict Equality) ALWAYS to avoid unexpected coercion!");
console.log("== (Loose Equality) can cause bugs due to implicit type conversion.");
console.log("Only exception: checking for null/undefined together:");
console.log("  if (value == null)  // true for both null and undefined");
console.log("  if (value === null || value === undefined)  // explicit but longer");
