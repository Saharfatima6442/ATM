#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000; //Dollar
let myPin = 1234;

console.log("Welcome to Code with SAHAR - ATM Machine");

let pinAnswer = await inquirer.prompt([
  { name: "pin", message: "Enter your pin: ", type: "number" },
]);
if (pinAnswer.pin === myPin) {
  console.log("correct pin entered");
  console.log(`Current Amount Balance is ${myBalance}`);

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "please select option:",
      type: "list",
      choices: ["Withdraw", "Check balance", "fast cash"],
    },
  ])

  if (operationAns.operation === "Withdraw") {
    let amountAns = await inquirer.prompt([
      { name: "amount", message: "enter your amount: ", type: "number" },
    ])
    if (amountAns.amount > myBalance) {
      console.log("Your balance is insufficient. ");
    }
    else{myBalance -= amountAns.amount;
    console.log(`${amountAns.amount} Withdrawn Successfully`);
  console.log(`Your Remaining Balance is: ${myBalance}`)}
  }
  if (operationAns.operation === "Check balance")
    {console.log(`Your current balance is: ${myBalance}`)}
} else {
  console.log("Incorrect Pin Entered");
}
