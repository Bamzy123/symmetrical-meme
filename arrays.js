// name: ["Alice", "Bob", "Charlie"]; // string

// number: [10, 20, 30]; // number

// boolean: [true, false, true]; // boolean


const students = ["Blessing", "Semire", "Iyanuoluwa", "Kafilat", "Martha"]; // string array

console.log(students[4]);

//modify

students[3] = "Ayo"; // modifying the value at index 3
console.log(students[3]); // output: "Ayo"

students.push("Kafilat"); // add to the end of the array
console.log(students[5]); // output: ["Blessing", "Semire", "Iyanuoluwa", "Ayo", "Martha", "Kafilat"]

console.log(students); // output: 6

students.unshift("Peace"); // add to the beginning of the array
console.log(students[0]); // output: ["Peace", "Blessing", "Semire", "Iyanuoluwa", "Ayo", "Martha", "Kafilat"]

console.log(students); // output: 7

students.pop(); // remove the last element

console.log(students); // output: ["Peace", "Blessing", "Semire", "Iyanuoluwa", "Ayo", "Martha"]

students.shift(); // remove the first element

console.log(students); // output: ["Blessing", "Semire", "Iyanuoluwa", "Ayo", "Martha"]

students.sort(); // sort the array in alphabetical order
console.log(students); // output: ["Ayo", "Blessing", "Iyanuoluwa", "Martha", "Semire"]

students.reverse(); // reverse the order of the array
console.log(students); // output: ["Semire", "Martha", "Iyanuoluwa", "Blessing", "Ayo"]

const firstThreeStudents = students.slice(1, 3); // get the first three students
console.log(firstThreeStudents); // output: ["Semire", "Martha", "Iyanuoluwa"]

const products = [
    { name: "Laptop", price: 1000, inStock: true,   categories: "Electronics" },
    { name: "Phone", price: 500, inStock: true, categories: "Electronics" },
    { name: "Shirt", price: 30, inStock: true, categories: "Fashion" },
    { name: "shoes", price: 80, inStock: true, categories: "Fashion" },
];

// get an array of product names using map
const names = products.map(product => product.name); // get an array of product names
console.log(names); // output: ["Laptop", "Phone", "Shirt", "shoes"]


// create a new array with formatted prices
const prices = products.map(product => ({
    ...product,
    displayPrice: "₦" + product.price.toLocaleString() // add a new property with formatted price
}));
console.log(prices[2]); // output: [{ name: "Laptop", price: 1000, inStock: true, categories: "Electronics", displayPrice: "₦1,000" }, { name: "Phone", price: 500, inStock: true, categories: "Electronics", displayPrice: "₦500" }, { name: "Shirt", price: 30, inStock: true, categories: "Fashion", displayPrice: "₦30" }, { name: "shoes", price: 80, inStock: true, categories: "Fashion", displayPrice: "₦80" }]


// filter products that are in stock
const electronics = products.filter(product => product.categories === "Electronics"); // filter products by category
console.log(electronics); // output: [{ name: "Laptop", price: 1000, inStock: true, categories: "Electronics" }, { name: "Phone", price: 500, inStock: true, categories: "Electronics" }]