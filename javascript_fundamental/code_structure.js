alert("Hello World");
//The code outputs 6 because JavaScript does not insert semicolons here. It is intuitively obvious 
// that if the line ends with a plus "+", then it is an “incomplete expression”, so a semicolon there would be incorrect. 
// And in this case, that works as intended.
alert(3 + 2 + 1);
[1,2].forEach(alert);