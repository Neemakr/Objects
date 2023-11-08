//Method 1: Using an Object literal
const person = {
    firstName : "Neema",
    lastName : "K R"
}
//Lines doesn't matter:
const person1 = { firstName : "Neema", age : 24};
//creates an empty object first and then adds the properties
const person2 = {};
person2.hobby = "Badminton";
person2.eyeColor = "blue";
//using new object()
const student = new Object();
//Adding new key to an object
student.book = "Ikigai";

const person3 = {
    firstName : "Neema",
    lastName : "K R",
    age : 24,
    qualification : "BTech"
}
console.log(person3);

//Accessing the properties of the Object
console.log(person3.firstName);
console.log(person3["lastName"]);