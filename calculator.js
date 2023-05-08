const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
// const name = prompt("What's your name? ");
// console.log(`Hi, I'm ${name}.`);

let firstNumber = prompt("Please enter the first number: ")
while(isNaN(firstNumber)) {
    firstNumber = prompt("You did not enter a valid number: ")
}

let secondNumber = prompt("Please enter the second number: ")
while(isNaN(secondNumber)) {
    secondNumber = prompt("You did not enter a valid number: ")
}

let operation = prompt("Please choose the operation (+, -, /, *): ")
while (operation !== "+" && operation !== "-" && operation !== "/" && operation !== "*") {
    operation = prompt("Please choose only from the provided operations (+, -, /, *): ")
}

let finalAnswer
if(operation == "+"){
    finalAnswer = firstNumber + secondNumber
} else 
if(operation == "-"){
    finalAnswer = firstNumber - secondNumber
} else 
if(operation == "/"){
    finalAnswer = firstNumber / secondNumber
} else 
if(operation == "*"){
    finalAnswer = firstNumber * secondNumber
}





console.log(`${firstNumber} ${operation} ${secondNumber} = ${finalAnswer}`)