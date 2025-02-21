// A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.

// To create a variable in JavaScript, use the let keyword.
let message1;
message1 = "Hello";
alert(message1);

//We can also declare multiple variables in one line:
let user = "John", age = 25, message2 = "Hello";

// var：函数作用域，会提升，允许重复声明，全局作用域下成为 window 属性。
// var: Function scope, hoisted, allows redeclaration, becomes a global property.

// let：块级作用域，不会提升，不允许重复声明，全局作用域下不是 window 属性。
// let: Block scope, not hoisted, disallows redeclaration, not a global property.

// const：块级作用域，不会提升，不允许重复声明，全局作用域下不是 window 属性。
// const: Block scope, not hoisted, disallows redeclaration, not a global property.

//We can also change it as many times as we want:
let message3 = "Hello";
message3 = "World";
alert(message3);

//To declare a constant (unchanging) variable, use const instead of let:
const myBirthday = "18.04.1982";
//myBirthday = "01.01.2001"; // Error, can't reassign the constant!
alert(myBirthday);

// There is a widespread practice to use constants as aliases for difficult-to-remember values that are known before execution.

// Such constants are named using capital letters and underscores.

// For instance, let’s make constants for colors in so-called “web” (hexadecimal) format:
const COLOR_RED = "#FF0000";
const COLOR_GREEN = "#00FF00";
const COLOR_BLUE = "#0000FF";

// ...later, when we need to pick a color
let color = COLOR_BLUE;
alert(color);
