const fs = require('fs')
const path =(process.argv[2])

fs.readFile(path, "utf8", function callback(err, data) {
    if (err) {
        console.error("Error", err);
        return;
    }
    const lines = data.split('\n').length - 1;
    console.log(lines);
});
