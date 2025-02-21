//The number type represents both integer and floating point numbers.
let n = 123;
let m = 12.345;

// Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: 
// Infinity, -Infinity and NaN.

// Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.

// We can get it as a result of division by zero:
let num = 1 / 0;
alert(num); // Infinity

//NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation,
//  for instance:
let num2 = "not a number" / 2;
alert(num2); // NaN, because the operation is incorrect

//A string in JavaScript must be surrounded by quotes.
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another variable ${str}`;

//There are 3 types of quotes.
//Double quotes: "Hello".
//Single quotes: 'Hello'.
//Backticks: `Hello`.
alert(phrase); 

//Backticks are “extended functionality” quotes. They allow us to embed variables and expressions 
// into a string by wrapping them in ${…}, for example:
let name = "John";
alert(`Hello, ${name}!`); // Hello, John!
alert(`the result is ${1 + 2}`); // the result is 3

// The boolean type has only two values: true and false.

// This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.

// For instance:
let isGreater = 4 > 1;
alert(isGreater); //true (the comparison result is true)

//The special null value does not belong to any of the types described above.

//It forms a separate type of its own which contains only the null value:
let age = null;

//If a variable is declared, but not assigned, then its value is undefined:
let name1;
alert(name1); // 

//typeof 是 JavaScript 中的一个操作符，用于检测变量的数据类型。它返回一个表示数据类型的字符串。
//The typeof operator in JavaScript is used to determine the data type of a variable. 
// It returns a string indicating the type of the data.

//For example:
let str3 = "Hello";
alert(typeof str3); // string


