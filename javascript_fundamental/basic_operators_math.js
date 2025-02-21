//An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 
// there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these 
// “arguments” instead of “operands”.
//An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:
let x = 1;
alert( -x ); // 1, unary negation was applied


//An operator is binary if it has two operands. The same minus exists in binary form as well:
let x2 = 1, y = 3;
alert( y - x2 ); // 2, binary minus subtracts one number from another
//An operator is a “function” that takes operands, performs actions with them and returns the result.


// The remainder operator %, despite its appearance, is not related to percents.
// The result of a % b is the remainder of the integer division of a by b
// For instance:
alert( 5 % 2 ); // 1, remainder of 5 divided by 2
alert( 8 % 3 ); // 2, remainder of 8 divided by 3
// The result of a % b is always a whole number. It equals 0 if a is divisible by b.


// The exponentiation operator a ** b raises a to the power of b.
// In school maths, we write that as ab.
// For instance:
alert( 2 ** 2 ); // 4 (22)
alert( 2 ** 3 ); // 8 (23)
alert( 2 ** 4 ); // 16 (24)


// Just like in maths, the exponentiation operator is defined for non-integer numbers as well.
// For example, a square root is an exponentiation by ½:
alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cube root)


// Let’s meet the features of JavaScript operators that are beyond school arithmetics.
// Usually, the plus operator + sums numbers.
// But, if the binary + is applied to strings, it merges (concatenates) them:
let s = "my" + "string";
alert(s); // mystring


// The binary + is the only operator that supports strings in such a way. 
// Other arithmetic operators work only with numbers and always convert their operands to numbers.
// Here’s the demo for subtraction and division:
alert( '6' - 2 ); // 4, subtraction is applied
alert( '6' / '2' ); // 3, division is applied


// The need to convert strings to numbers arises very often. For example,
// if we are getting values from HTML form fields, they are usually strings. What if we want to sum them?
// The binary plus would add them as strings:
let apples = "2";
let oranges = "3";
alert( apples + oranges ); // 23, the binary plus concatenates strings


//If we want to treat them as numbers, we need to convert and then sum them:
let apples2 = "2";
let oranges2 = "3";
alert( +apples2 + +oranges2 ); // 5, the binary plus converts to numbers


// The fact of = being an operator, not a “magical” language construct has an interesting implication.
// All operators in JavaScript return a value. That’s obvious for + and -, but also true for =.
// The call x = value writes the value into x and then returns it.
// Here’s a demo that uses an assignment as part of a more complex expression:
let a = 1;
let b = 2;
let c = 3 - (a = b + 1);
alert(a); // 3
alert(c); // 0


//Another interesting feature is the ability to chain assignments:
let a2, b2;
a2 = b2 = 2 + 2;
alert(a2); // 4
alert(b2); // 4
//Chained assignments evaluate from right to left. First, the rightmost expression 2 + 2 is evaluated 
//and then assigned to the variables on the left: c, b and a. At the end, all the variables share a single value.


//We often need to apply an operator to a variable and store the new result in that same variable.
//For example:
let n = 2;
n = n + 5;
n = n * 2;
alert(n); // 14


// Increasing or decreasing a number by one is among the most common numerical operations.
// So, there are special operators for it:
// The increment ++ increases a variable by 1:
let counter = 2;
counter++;      // works the same as counter = counter + 1, but is shorter
alert(counter); // 3


//The decrement operator -- decreases a variable by 1:
let counter2 = 2;
counter2--;      // works the same as counter2 = counter2 - 1, but is shorter
alert(counter2); // 1


//As we know, all operators return a value. Increment/decrement is no exception. 
// The prefix form returns the new value while the postfix form returns the old value (prior to increment/decrement).
// For example:
let counter3 = 1;
let a3 = ++counter3; // (*)
alert(a3); // 2
//The prefix form ++counter3 increments counter3 and returns the new value (2).
// The postfix form counter3++ also increments counter3, but returns the old value (1).


// The comma operator , is one of the rarest and most unusual operators. 
// Sometimes, it’s used to write shorter code, so we need to know it in order to understand what’s going on.
// The comma operator allows us to evaluate several expressions, dividing them with a comma ,. 
// Each of them is evaluated but only the result of the last one is returned.
let a4 = (1 + 2, 3 + 4);
alert(a4); // 7 (the result of 3 + 4)










