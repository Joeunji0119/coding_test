const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    const isUpperCase = (str) => {
        return str === str.toUpperCase()
    } 
    console.log(Array.from(str).map(e => isUpperCase(e) ? e.toLowerCase():e.toUpperCase()).join(""))
});