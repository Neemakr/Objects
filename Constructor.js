//Constructor without parameter example
function Student(){
    this.Name = "Neema";
    this.class = 12;
}
const stu = new Student();
console.log(stu.Name + " " + stu.class); 

//Constructor with parameters Example:
function Person(first, last, age, nationality){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.Nationality = nationality;
}

//Create an object
const myObj1 = new Person("John", "Doe", 24, "Indian");
console.log(myObj1.firstName + " " + myObj1.lastName + " " + myObj1.age + " " + myObj1.Nationality);
//Create another object
const myObj2 = new Person("Sally", "Rally", 48, "Indian");
console.log(myObj2.firstName + " " + myObj2.lastName + " " + myObj2.age + " " + myObj2.Nationality);

//Adding a property to an object
myObj1.eyecolor = "black";//the property will be added to myObj1 only not myObj2
console.log(myObj1.eyecolor);
console.log(myObj2.eyecolor);

//Changing the property 
myObj1.eyecolor = "blue";
console.log(myObj1.eyecolor);

//Adding a method to an object
myObj1.fullName = function(){
    return this.firstName + " " + this.lastName;
}
console.log(myObj1.fullName());