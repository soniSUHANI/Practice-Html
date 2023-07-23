//static = belongs to the class, not the objects
//         properties: useful for caches, fixed-configuration
//         methods: useful for utility functions


class Car{

    numberOfCars = 0;
    constructor(model){
        this.model = model;
        this.numberOfCars +=1;

    }

    static startRace(){
        console.log("3...2...1...Go!");
    }
}

const car1 = new Car("Mustang");
const car2 = new Car("BMW");
const car3 = new Car("Ferrari")

console.log(car1.numberOfCars);
console.log(car2.numberOfCars);
console.log(car3.numberOfCars);

car1.startRace();