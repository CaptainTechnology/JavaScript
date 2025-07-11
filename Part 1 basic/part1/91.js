// static methods and properties
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    static classInfo(){
        return 'this is person class';
    }
    static desc = "static property";
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    eat(){
        return `${this.firstName} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

const person1 = new Person("harshit", "sharma", 8);
// console.log(person1.eat());

// const info = Person.classInfo();
// console.log(person1.desc);
// console.log(info);


class Circle {
    #radius=333; // private field
    static names="captain jack";
    constructor(radius) {
        this.#radius = radius;
    }

    #calculateArea() { // private method
        return Math.PI * this.#radius * this.#radius;
    }

    getArea() {
        return this.#calculateArea();
    }
}

const circle = new Circle(5);
console.log(circle.getArea()); // Accessing through public method
// console.log(circle.#radius); // SyntaxError: Private field '#radius' must be declared in an enclosing class
console.log(Circle.names);
console.log(Circle.password);
console.log(Circle);
