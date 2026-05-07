//Student Profile....
const student = {
  name: "Blessing Okafor",
  age: 22,
  city: "Funnab",
  course: "Web Development",
  hasPaid: true,
  skills: ["HTML", "CSS", "JavaScript"]
};

// Display profile info
console.log("=== STUDENT PROFILE ===");
console.log("Name:", student.name.toUpperCase());
console.log("Age:", student.age); //The dot operator means you are calling what is in student out.
console.log("City:", student.city);
console.log("Course:", student.course);
console.log("Payment status:", student.hasPaid ? "Paid" : "Unpaid"); // the question mark and the double dot means if or if not.

// String operations
console.log("\n=== NAME ANALYSIS ===");
console.log("Full name length:", student.name.length, "characters");
console.log("First name:", student.name.slice(0, 8)); // Slicing the first name.
console.log("Has 'Okafor':", student.name.includes("Okafor")); // confirming if the name includes "Okafor".

// Skills summary
console.log("\n=== SKILLS ===");
console.log("Total skills:", student.skills.length); // the dot operator is used to call the length(NUMBER) of the skills array.
console.log("Skills list:", student.skills.join(", ")); // Joining the skills array into a string with commas.

// Simple calculation
const courseFee = 25000; 
const discount = 0.1;
const finalFee = courseFee - (courseFee * discount);
console.log("\n=== FEES ===");
console.log("Original fee: ₦" + courseFee.toLocaleString()); // toLocaleString() is used to format the number with commas for thousands.
console.log("Discount: " + (discount * 100) + "%"); // Multiplying the discount by 100 to convert it to percentage.
console.log("Amount to pay: ₦" + finalFee.toLocaleString()); // Displaying the final fee after discount, formatted with commas.