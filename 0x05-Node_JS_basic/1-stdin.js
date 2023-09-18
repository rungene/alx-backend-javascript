const readLine = require('readline');

const r1 = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

r1.question('Welcome to Holberton School, what is your name?', function(answer) {
  console.log('Your name is: ${answer}');
  r1.on('exit', () => {
    console.log('This important software is now closing');  
  })
  r1.close();
});
