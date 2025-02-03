const { readFile, readFileSync } = require('fs');

readFile('./hello.txt', 'utf8', (err, txt) => {
    console.log(txt)
})

console.log("This is urgent")