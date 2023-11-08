//Displaying the objects by name
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person.age);

//using loop
for(let x in person){
    console.log(person[x]);
}

//Any Js objects can be converted to Arrays using Object.values() - using Object.values()
let y = Object.values(person); //y is now a JS array
console.log(y);

//Any JS Objects can be converted to string using JSON.Stringify() - using JSON.Stringify()
let myString = JSON.stringify(person);//myString is now a string
console.log(myString);

//dates to string
const date = {
    today : new Date()
}
let myDate = JSON.stringify(date);
console.log(myDate);