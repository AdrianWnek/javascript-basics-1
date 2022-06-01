const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


let greeting = 'Welcome to the Password Validator Tool!'
    console.log(greeting)

reader.question("What is your password? ", function(input) {
    const tokens = input.split(' ');

    const password = tokens[0];

    console.log('password', password);
    
    if (password.lenght >= 10) {
        console.log('Strong Password!');
    } else {
        console.log('Weak Password! Must have at least 10 characters.')
    }

reader.close()

});
