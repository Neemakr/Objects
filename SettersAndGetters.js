const person = {
    firstName : "Nick",
    lastName : "Jonas",
    get lang(){
        return this.lastName;
    }
}
console.log(person.lang);
//console.log(person.lang());//error

const person1 = {
    Books : "Ikigai",
    get : function(){
        return this.Books;
    }
}
console.log(person1.get()); // call by get() paranthesis

//Setter
const x = {
    marks : 'A',
    set changeName(newMarks){
        this.marks = newMarks;
    }
}
x.changeName = 'B';
console.log(x.marks);