const { appendFile } = require("fs"); 

let appendContents = "\nHello World!".repeat(1000);

appendFile("./HelloWorld.txt", appendContents, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Success update file");
    }
});

