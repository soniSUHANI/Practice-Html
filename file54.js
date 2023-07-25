//super = Refers to the parent class.
//        commonly used to ivoke constructor of a parent class

class Animal{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Rabbit extends Animal{
    constructor(name, age, runSpeed){

        super(name,age);
        this.runSpeed = runSpeed;
    }

}

class Fish extends Animal{
    constructor(name,age,swimSpeed){
        this.name = name;
        this.age = age;
        this.swimSpeed = swimSpeed;
    }

}

class Hawk extends Animal{
    constructor(name,age,flySpeed){
        this.name = name;
        this.age = age;
        this.flySpeed = flySpeed;
    }

}

const rabbit = new Rabbit("rabbit", 1, 40);
const fish = new Fish("fish", 2, 80);
const hawk = new Hawk("hawk", 3, 200);