function Person(first, last, age, eyecolor){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
const obj = new Person("John", "Doe", 45, "black");
console.log(obj.firstName + " " + obj.lastName + " " + obj.age + " " + obj.eyeColor + " " + obj.Nationality);

//Adding a property to a Constructor using prototype:
Person.prototype.Nationality = "Indian";
console.log(obj.Nationality);// Objects inherit the properties of the property added using prototype

//Adding a method using prototype
Person.prototype.greet = function(name){
    console.log("Hi" + name);
}
obj.greet("Neema");

//Changing the value of the prototype value
Person.prototype.Nationality = "Japanese";
console.log(obj.Nationality);

/*If a prototype value is changed, then all the new objects will have the changed property value. 
All the previously created objects will have the previous value*/
Person.prototype = {Nationality : "Korean"};
console.log(obj.Nationality);
const obj1 = new Person();
console.log(obj1.Nationality);
console.log(obj.Nationality);

//If value is present in both constructor and prototype then it takes the constructor value
Person.prototype.age = 54;
console.log(obj.age);

//You can also access the prototype property of a constructor function from an object.
console.log(obj.__proto__);