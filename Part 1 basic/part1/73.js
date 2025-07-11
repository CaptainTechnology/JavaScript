function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}

const user1 = {
    firstName : "harshit",
    age: 8,   
}

const user2 = {
    firstName : "mohit",
    age: 9,
    
}

function Car(model) {
    this.model = model;
}


Car.name = 'Fortuner';  // Directly adding property to Car function
Car.prototype.price = 10000;
const car1 = new Car('Sedan');
const car2 = new Car('SUV');
car2.name="fortuner";
  
console.log(car1.name);  // Output: "Fortuner"
console.log(car2.name);  // Output: undefined
console.log(car1.price);
console.log(car2.price);




// user1.in();
// apply
// about.apply(user1, ["guitar", "bach"]);
// const func = about.bind(user2, "guitar", "bach");
// func();
