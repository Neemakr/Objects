let person ={
    firstName : "John",
    lastName : "Doe"
}
console.log(person);
console.log(person.firstName);

//Looping using for..in
for(let i in person){
    console.log(person[i]);
}

//Adding a property 
person.Nationality = "Indian";
console.log(person);

//Deleting
delete person.Nationality;
console.log(person);

//Nested Arrays and Objects
let myObj = {
    cars : [
        {
            name : "Ford",
            models: [
                "Fiesta", "Focus", "Mustang"
            ]
        },
        {
            name : "BMW",
            models : [
                "320", "X3", "X5"
            ]
        },
        {
            name : "Fiat",
            models : [
                "500", "Panda"
            ]
        }
    ]
}
//use for..in to loop
for(let i in myObj.cars){
    console.log(myObj.cars[i].name);
    for(let j in myObj.cars[i].models){
        console.log(myObj.cars[i].models[j]);
    }
}