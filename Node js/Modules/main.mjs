// import c, {a,b} from "./data.mjs";


// const a = "NodeJS";
// const b = "Modules";
// const c = "Common and ECMA Script modules";

// console.log(a, b, c);

import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`What's your name?`, name => {
  console.log(`Hi ${name}!`);
  rl.close();
});
