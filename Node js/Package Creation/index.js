// const greet = "Hello World!!!"
// console.log(greet);

const fs = require('fs');

fs.writeFile('newFile1.txt', 'Input content', function(err){
    if (err) throw err;
    console.log("Saved!");
});