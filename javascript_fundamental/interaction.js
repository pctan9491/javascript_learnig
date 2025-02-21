// The visitor can type something in the prompt input field and press OK. Then we get that text in the result. Or they can cancel the input by pressing Cancel or hitting the Esc key, then we get null as the result.

// The call to prompt returns the text from the input field or null if the input was canceled.
let age = prompt('How old are you?', 100);

alert(`You are ${age} years old!`); // You are 100 years old!

// The function confirm shows a modal window with a question and two buttons: OK and Cancel.

// The result is true if OK is pressed and false otherwise.

// For example:

let isBoss = confirm("Are you the boss?");

alert(isBoss); // true if OK is pressed
