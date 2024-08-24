#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

console.log(chalk.magentaBright.bold.underline("\n\t\t\tTable Generator\n"))

let userInput = await inquirer.prompt([
    {
        type: "number",
        name: "num1",
        message: chalk.green.italic.bold("please enter your number"),
        validate: (input) => {
            const num2 = parseInt(input)
            if (isNaN(num2)) {
                return chalk.bold.red.italic.underline("please enter the numeric number")
            }
            else {
                return true
            }
        }
    }
])

let userNum:number = userInput.num1

for(let i:number = 1; i <= 10; i++){
    let result:number = userNum * i
    console.log(chalk.yellow.bold(`\t ${userNum} x ${i} = ${result}`))
}
