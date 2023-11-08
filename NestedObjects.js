const myObj = {
    name : "John",
    age : 44,
    cars : {
        car1:"Ford",
        car2:"BMW",
        car3:"Fiat"
    }
}
console.log(myObj.cars.car1);
console.log(myObj.cars["car3"]);
console.log(myObj["cars"]["car2"]);