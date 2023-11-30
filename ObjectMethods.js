const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName : function () {
        return this.firstName + " " + this.lastName;
    },
    hello(){
        console.log("Hello");
    }
}
console.log(person.fullName());
console.log(person.fullName);
person.hello();

//Using built-in methods
const person1 = {
    firstName : "Henry",
    lastName : "Daniel",
    fullName : function() {
        return (this.firstName + " " + this.lastName).toUpperCase();
    } 
}
console.log(person1.fullName());