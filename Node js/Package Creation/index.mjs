// const greet = "Hello World!!!"
// console.log(greet);

// const fs = require('fs');

// fs.writeFile('newFile1.txt', 'Input content', function(err){
//     if (err) throw err;
//     console.log("Saved!");
// });

// const readline = require('node:readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question(`What's your name?`, name => {
//   console.log(`Hi ${name}!`);
//   rl.close();
// });

// import {input} from '@inquirer/prompts';
// const answer = await input ({message: "Enter your name"});

import inquirer from 'inquirer';

const questions = [
  {
    type: 'input',
    name: 'firstName',
    message: "What's your first name?"
  },
  {
    type: 'input',
    name: 'lastName',
    message: "What's your last name?"
  },
  {
    type: 'input',
    name: 'phoneNumber',
    message: 'What\'s your phone number?',
    validate: function(value) {
      const pass = value.match(/^\d{10}$/);
      if (pass) {
        return true;
      }
      return 'Please enter a valid 10-digit phone number.';
    }
  }
];

inquirer.prompt(questions)
  .then(answers => {
    console.log('User entered:');
    console.log('First Name:', answers.firstName);
    console.log('Last Name:', answers.lastName);
    console.log('Phone Number:', answers.phoneNumber);
  });










