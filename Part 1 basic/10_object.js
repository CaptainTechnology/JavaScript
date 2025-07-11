// let's start with object

// store data in key-value pairs




// creating array
// creating array
// creating array

// using object literals {} simplest way to create a object

// let car={brand:"Toyota",model:"Fortuner"}
// console.log(car);

// using new Object constuctor

// const car=new Object();
// console.log(car);
// car.brand="Toyota";
// car["model"]="Fortuner";
// console.log(car);

// using constructor function, when multiple object share same structucture use constructor function

// function Car(brand,model){
//     this.brand=brand;
//     this.model=model;
//     console.log(this);
// }

// const car1=new Car("Toyota","Fortuner");// without new car1 undefined
// const car2=new Car("Maruti Suguki","Swirft desire");
// console.log(car1);
// console.log(car2);

// using Object.create(obj1)-> create object that inherit from another object// adds in prototype

// const obj1={"brand":"Toyota",model:"Fortuner","address":{"country":"USA"}}

// const obj2=Object.create(obj1)
// obj2.price=8000000;
// console.log(obj2.price);



// console.log(obj1.address.city);
// console.log(obj1.price);//undefined if we uses object.assing then it is 800000, object.create is used to 
// obj1.address.country="India";
// console.log(obj1.address.country);//india
// console.log(obj2.address.country);//india





//[] bracket notation and (.) dot notation

// const profile = {
//     "user name": "Alice",
//     age: 28,
//     101: "ID",
//     role: "admin",
//   };

//   let key1 = "role";
//   let key2 = "user name";
//   let wrongKey = "User Name";  // Incorrect capitalization
//   let objKey = {};

//   console.log(profile["user name"]);     // ✅ "Alice"
//   console.log(profile[key1]);            // ✅ "admin"
//   console.log(profile["101"]);           // ✅ "ID"
//   console.log(profile[101]);             // ✅ "ID"
// //   console.log(profile.101);//syntax error

//   console.log(profile[wrongKey]);        // ❌ undefined (typo)
//   console.log(profile[objKey]);          // ❌ "value" only if "[object Object]" exists



// Error example:
//   try {
//     console.log(profile.undeclaredKey);//undefined
//     console.log(profile[undeclaredKey]); // ❌ ReferenceError
//   } catch (err) {
//     console.error("Caught error:", err.message);
//   }

// works when
// You use string keys in quotes:
// → obj["name"]

// The key has spaces or special characters:
// → obj["full name"]

// The key is a number:
// → obj[123] or obj["123"]

// You're using a variable as a key:
// → let key = "role"; obj[key]

// Adding/updating properties dynamically



// dot notation

// The property name is a valid identifier (no spaces, no special characters, doesn’t start with a number)
// → obj.name

// You are accessing known/static keys
// → user.age, car.model

// The key is a hardcoded, simple name

// const profile = {
//     "user name": "Alice",
//     age: 28,
//     101: "ID",
//     role: "admin",
//   };

//   let key="role";

//   console.log(profile.age);
//   console.log(profile.key);//undefined
//   console.log(profile."user name");//error

//   console.log(profile.101);//syntax error





// when to use bracket notation and when  to use dot notation


// ✅ Use dot notation when:
// The property name is a valid identifier (no spaces, no special characters, doesn’t start with a number).

// You know the property name in advance (i.e., it’s not stored in a variable).

// const person = {
//     name: "Alice",
//     age: 30
//   };

//   console.log(person.name); // ✅ works
//   console.log(person.age);  // ✅ works


// Use bracket notation when:
// The property name is stored in a variable.

// The property name contains spaces, hyphens, or special characters, or starts with a number.

// You're dynamically generating the key name.

// const person = {
//     name: "Alice",
//     "home address": "123 Main St",
//     age: 30,
//   };

//   let key = "name";
//   console.log(person[key]);            // ✅ works with variable
//   console.log(person["home address"]); // ✅ works with space
//   console.log(person["age"])
// //   console.log(person[age])//error
//   console.log(person.age);


//   console.log(person[undecKey]);//error
//   console.log(person.undecKey);// undefined






// access object property


// const person = {
//     "name": "Alice",
//     "home address": "123 Main St",
//     age: 30,
// };

// let key="name";
// console.log(person.age);
// console.log(person["home address"]);
// console.log(person[key]);


// adding and deleting and updating properties

// const person = {
//     name: "Alice",
//     address:{"city":"siddharth nagar"},
//     age: 30,
//     101:"ID"
// };

// console.log(person);

// person.address.country="India"
// person["full name"]="capain jack"
// console.log(person["full name"]);
// console.log(person);
// person.age="23"
// console.log(person.age);

// delete person.age;
// console.log(person.age);//undefined
// delete person["full name"]
// console.log(person["full name"]);//undefined

// // check property is exist or not
// console.log("name" in person);
// console.log("age" in person);//false
// console.log(101 in person);
// person.salary=120000;
// console.log(person.hasOwnProperty("name"));//true
// console.log(person.hasOwnProperty("salary"));//true
// console.log(person.hasOwnProperty("friend"));//false


// Iterate over object
// Iterate over object


// const person = {
//     firstName: "Captain",
//     lastName:"Jack",
//     address:{"city":"siddharth nagar"},
//     age: 30,
//     101:"ID"
// };

// for(const key in person){
//     console.log(key);  
// }


// const keys=Object.keys("person")//[0 1 2 3 4 ...] 
// const keys=Object.keys(person)
// console.log(keys);

// const values=Object.values("person");
// console.log(values);//['p', 'e', 'r', 's', 'o', 'n']

// const entries=Object.entries(person);
// console.log(entries);
// console.log(entries[2][1]);//"Jack"


// computed property
// it allow you to define dynamacally object keys using variable
// A computed property is when you use an expression (like a variable or a function call) inside square brackets [] to dynamically define or access a property name in an object.

// const key = "name";

// const obj = {
//   [key]: "Alex"
// };

// console.log(obj.name); // "Alex"


// let var1="firstName";
// let var2="age"
// const person={[var1]:"captain",[var2]:23,var1:"newest thing"}
// console.log(person);

// learn it in advance

// ... spread operator in Object

// cloning ; shallow copy

// const original = { name: "Alex", age: 25,address:{city:"sd"} };
// const copy = { ...original };
// copy.address.city="siddharth nagar"

// console.log(copy); // { name: "Alex", age: 25 }
// copy.name="aa"
// console.log(original.address.city);
// console.log(original.name);

// merging object
// const user = { name: "Sam", age: 30 };
// const contact = { email: "sam@example.com" };

// const userInfo = { ...user, ...contact, };

// console.log(userInfo);

// in the case of overlap the last wins

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 99, c: 3 };

// const merged = { ...obj1, ...obj2 };
// console.log(merged); // { a: 1, b: 99, c: 3 }


// updating overriding property

// const user = { name: "Sam", age: 30 };

// const updatedUser = { ...user, age: 31 };

// console.log(updatedUser); // { name: "Sam", age: 31 }

// removing property

// const user = { name: "Alex", age: 25, email: "alex@example.com" };

// const {email,age:ages, ...rest } = user;// in the case of destructuring rest must be at last


// console.log(rest); // { name: "Alex", age: 25 }
// console.log(email,ages);

// object destructuring 
// object destructuring 
// object destructuring ; extract values from an object and assign them to variable

// const person={name:"captain",age:23,address:{city:"Siddharth Nagar"}};

// console.log(person);
// const {name,age,address}=person;
// console.log(address);
// address.city="New City";
// console.log(person.address.city);//new city

// assign diffrent value
// const person={name:"captain",age:23,address:{city:"Siddharth Nagar"},salary:undefined};

// const {name:userName,age:userAge}=person;
// console.log(userName,userAge);

// setting default value
// const {name="shah",age=33,salary=230000,compony="USA"}=person;
// if value match then it will take from object otherwise default value
// console.log(name,age,salary,compony);

// nested object destructuring

// const user = {
//     name: "captain",
//     contact: {
//         email: "captain@example.com",
//         phone: "123-456-7890"
//     }
// };

// const {name, contact: { email, phone },contact:cont} = user;

// console.log(name);  // captain
// console.log(email); // captain@example.com
// console.log(phone); // 123-456-7890
// console.log(cont);



// rest operator for  rest property

// const user = {
//     name: "captain",
//     email: "captain@example.com",
//     phone: "123-456-7890"
// };

// const { name, ...contact,phone } = user;// rest operator must be last
// const {name,phone,...contact}=user;
// // console.log(phone);
// const  {name,...contact}=user;
// // return rest object property as  object
// console.log(name, contact.email,contact.phone);
// console.log(contact);


// const user= {
//     name: "captain",
//     email: "captain@example.com",
//     phone: "123-456-7890"
// };

// destructuring in function directly

// function destPara({name,email}){
// console.log(name,email);
// }

// destPara(user)

// destructuring object in loop

// const users = [
//     { name: "Alex", age: 25 },
//     { name: "Jordan", age: 30 },
//     { name: "Taylor", age: 28 }
// ];

// for (const { name, age,p } of users) {
//     console.log(`${name} is ${age} years old.`);
//     console.log(`${p}`);
// }


// const users = [
//     {
//       name: "Alex",
//       contact: { email: "alex@example.com", phone: "123-456" }
//     },
//     {
//       name: "Jordan",
//       contact: { email: "jordan@example.com", phone: "789-012" }
//     }
//   ];

//   for (const { name, contact: { email } } of users) {
//     console.log(`${name}'s email is ${email}`);
//   }



// destructuring using computed property

// let user={age:23}
// const key="age"
// const {["age"]:userAge}=user;
// const {[key]:userAge}=user;
// console.log(userAge);


// skip unnecessay properties

// const user={name:"captain",age:23,admin:true}
// const {name:userName,age:userAge}=user;
// console.log(userName,userAge);



// object inside array

// const users = [
//   { name: "Alex", age: 25 },
//   { name: "Jordan", age: 30 },
//   { name: "Taylor", age: 28 }
// ];

// console.log(users[0].name); // "Alex"

// for (const user of users) {
//   console.log(`${user.name} is ${user.age} years old.`);
// }


// object into array

// let user = { name: "Alice", age: 25 ,address:{"country":"India",state:"Uttar Pradesh"}};
// let users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
// ];

// // Convert to JSON
// let userJson = JSON.stringify(user);
// let usersJson = JSON.stringify(users);

// console.log(userJson);  // {"name":"Alice","age":25}
// console.log(usersJson); // [{"name":"Alice","age":25},{"name":"Bob","age":30}]

// let newJson=JSON.parse(userJson)
// console.log(JSON.parse(userJson));
// console.log(typeof user,typeof userJson,typeof newJson);//object string object





