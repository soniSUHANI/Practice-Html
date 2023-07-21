// constructor = a special method of class
//               accepts arguments and assigns properties

class student{

    constructor(name,age,gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    study(){
        console.log(`${this.name} is studying`);
    }
}

const student1 = new student("Soni Suhani",18,7.66);
const student2 = new student("Anisha Lathwal",19,8.3);


console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.study();

console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);
student2.study();