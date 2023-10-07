#!/usr/bin/env node
import inquirer from "inquirer";
let ans = await inquirer.prompt([
    {
        type: "input",
        name: "Sentence",
        message: "Enter Your Sentence You Coint The Words: "
    }
]);
const words = ans.Sentence.trim().split(" ");
console.log(`Words In Your Sentece Are ${words.length}`);
