// if and else statements.

const balance = 5000;
const itemPrice = 5000;

if (balance >= itemPrice) {
    console.log("purchase successful");
} else {
    console.log("insufficient funds");
}

// for loop.

for (let blessing = 0; blessing<=10; blessing++) {
    console.log(blessing);
}

// while loop.

let attempts = 0;
const maxAttempts = 5;// real condition.

while (attempts < maxAttempts) {
    console.log("Attempt number:", attempts + 1);
    attempts++;
}
console.log("Maximum attempts reached.");

// FUNCTION.

function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Blessing"); // calling the function.
greet("Iyanuoluwa")