//object = A fgroup of properties and methods
//         properties = what an object has
//         methods = what an object can do
//         use. to access prpoerties/methods


const car = {
    model : "Mercades",
    color : "red",
    year : 2023,

    drive : function(){
        console.log("You can drive the car");
    },

    brake : function(){
        console.log("You step on the brakes");

    }
}

const car2 = {
    model : "BMW",
    color : "Blue",
    year : 2024,

    drive : function(){
        console.log("You can drive the car");
    },

    brake : function(){
        console.log("You step on the brakes");

    }
}

console.log(car2.model);
console.log(car2.color);
console.log(car2.year);

car2.drive();
car2.brake();