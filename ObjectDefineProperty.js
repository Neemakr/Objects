const person = {
    firstName : "Manasa"
}

//Get
Object.defineProperty(person, "getName",{
    get : function(){
        return this.firstName;
    }
});
console.log(person.getName);

//Set
Object.defineProperty(person, "changeName",{
    set : function(newName){
        this.firstName = newName;
    }
});
person.changeName = "Sarah";
console.log(person.firstName);

//Example 2:
const obj = {
    counter : 0
}

Object.defineProperty(obj, "reset", {
    get : function () {
        this.counter = 1;
    }
});
obj.reset;
console.log(obj.counter);

Object.defineProperty(obj, "increment", {
    get : function(){
        return this.counter++;
    }
});
obj.increment;
console.log(obj.counter);

Object.defineProperty(obj, "decrement", {
    get : function(){
        return this.counter--;
    }
});
obj.decrement;
console.log(obj.counter);

Object.defineProperty(obj, "Add", {
    set : function(n){
        this.counter += n;
    }
});
obj.Add = 5;
console.log(obj.counter);

Object.defineProperty(obj, "subtract", {
    set : function(x){
        this.counter -= x;
    }
});
obj.subtract = 1;
console.log(obj.counter);

const student = {
    name : "Neema"
}
//console.log(student.id);
Object.defineProperty(student, 'id', {
    value : 55,
    writable : true
});
console.log(student.id);
student.id = 77;
console.log(student.id);