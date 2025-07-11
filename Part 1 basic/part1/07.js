// trim() 
// toUpperCase()
// toLowerCase()
// slice()

// let firstName = " captain jack ";

// console.log(firstName.length);
// let trimName = firstName.trim(); // "captain jack"
// console.log(trimName)
// console.log(trimName.length);
// let uCaseName = firstName.toUpperCase();
// let lCaseName = firstName.toLowerCase();
// console.log(uCaseName,lCaseName);
// console.log("hello")

// slice method
// start index 0=FirstLetter
// end index arr.length=lastLetter
// console.log("hello");







// let newString = fName.slice(0,7); // hars
// console.log(newString);



// String methods


// let str="hello"
// console.log(str.length);
// console.log(str.charAt(4444));

// let str = "Hello, World!";
// console.log(str.charCodeAt(7)); // Output: 87

// console.log("hello".concat("word",'hsh',"hg","djlasdjf"));
// let str1="hello",str2="worlds";
// console.log(str1,str2);


// let str = "Hello, World!";
// console.log(str.includes("Hello",-2)); // Output: true

// let str = "Hello, World!";
// console.log(str.indexOf("o",0)); // Output: 4

// let str = "Hello, World!";
// console.log(str.lastIndexOf("o",0)); // Output: 8

// let str = "Hello, World!";
// console.log(str.slice(0,5)); // Output: Hello

// let str = "Hello, World!";
// console.log(str.slice(0,-5)); // Output: Hello


// let str = "Hello, World!";
// let new_str=str.substring(0,4);
// console.log(new_str);



// let str = "Hello, World!";
// let new_str=str.substr(-6,5);
// console.log(new_str);

// let str = "     Hello, World!   ";
// let new_str=str.trim();
// console.log(new_str);




// let str = "Hello, World!, jack, sparrow";
// console.log(str.split(", ",2)); // Output: ["Hello", "World!"]

// let str = "Hello, World! World";
// console.log(str.replaceAll("World", "JavaScript")); // Output: Hello, JavaScript!



// let str = "Hello, World!";
// console.log(str.startsWith("Hello",2)); // Output: true
// console.log(str.endsWith("World!",)); // Output: true

// let str = "Hello, World!";
// console.log(str.match(/World/)); // Output: ["World"]
// let str = "test1 test2 test3";
// let matches = str.matchAll(/test(\d)/g);
// for (const match of matches) {
//   console.log(match); // Output: ["test1", "1"], ["test2", "2"], ["test3", "3"]
// }

// let multiline = `This is a 
// console.log(multiline);string
// that spans across
// multiple lines.`;


// const objs={'name':'cpatian',"age":32};
// let str=`hello ${objs} jack`;
// console.log(str);

// let smiley = "😊";
// console.log(smiley.length); // 2 (UTF-16 code units)


// let a= undefined;
// console.log(typeof a);
// let b;

// console.log(a===b);


// function f(){


// }

// console.log(f());



// let bigNumber = 12345678901234567890n; // Notice the 'n' at the end
// console.log(bigNumber); // Output: 12345678901234567890n

// let anotherBigNumber = BigInt("12345678901234567890");
// console.log(anotherBigNumber); // Output: 12345678901234567890n

// // Operations with BigInt:
// let sum = bigNumber + anotherBigNumber;
// console.log(sum); // Output: 24691357802469135780n

// // Mixing BigInt and regular numbers (throws an error):
// let regularNumber = 42;
// // console.log(bigNumber + regularNumber); // This will throw a TypeError
// let str=`${bigNumber} hello`
// console.log(str);


// let num=1234567890123456789045n;
// console.log(num.toString());

let defaultName = "Guest";
let providedName = "";

let name = providedName || defaultName;
console.log(name); // Output: "Guest" (because providedName is falsy)


