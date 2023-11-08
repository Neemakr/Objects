const person = {
    firstName : "Neema",
    lastName : "K R",
    age : 24
}

//x is not a copy of person it is person only
const x = person;
x.age = 23;//will change both person.age and x.age
console.log(person.age);

//Adding property 
person.Nationality = "Indian";
console.log(person);

//Deleting  a property
delete person.age;
console.log(person);