const fs = require('fs');

// 1. Read Files
// fs.readFile("index.html", (error, data) => {
//     if (error) return console.log("error", error);
//     console.log(data.toString());
// });

// 2. Create Files
// i) appendFile
// fs.appendFile("newFile1.txt", "Hello World!!!", function (err) {
//     if (err) throw err;
//     console.log("Data Saved");
// });

// ii) openFile
fs.open('newfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});
