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

// iii) writeFile
fs.writeFile('newfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

//   3. Update Files
// i) appendFiles
fs.appendFile('newfile1.txt', '\n This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
  });

//   ii) writeFiles
fs.writeFile('newfile3.txt', '\n This is my text', function (err) {
    if (err) throw err;
    console.log('Replaced!');
  });

//   4. Delete Files
fs.unlink('newfile2.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });
  
//   5. Rename Files
fs.rename('newfile1.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });
  
  
  