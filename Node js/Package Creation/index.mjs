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

import {input} from '@inquirer/prompts';
const answer = await input ({message: "Enter your name"});
