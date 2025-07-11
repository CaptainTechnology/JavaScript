

// let String=("hello captain",'shah',`captain jack`); 
// we can create string in three diffrent ways

// console.log(String);
// console.log(String.length);

// let str = "captain jack";


// console.log(str.charAt(3));
// console.log(str.charAt(100));// ''
// console.log(str.charAt(-100));//''

// console.log(str.charCodeAt(1));
// console.log("hello".concat("captain"," ",'jack'," ","sparrow"));
// console.log(str.includes("c",0));
// console.log(str.includes("captain",0));
// console.log(str.includes("c",1));
// console.log(str.indexOf("c",0));
// console.log(str.indexOf("c",1));
// console.log(str.indexOf("c",3));
// console.log(str.indexOf("z"));

// console.log(str.lastIndexOf("c",str.length-1));
// console.log(str.lastIndexOf("c",2));// check from the tail

// extract the string


// let str = "captain jack";

// console.log(str.slice(0,5));
// console.log(str.slice(0,str.length));
// console.log(str.slice(0,-1));
// console.log(str.slice(0,-3));


// console.log(str.substring(0,5)); //similar to slice does'nt accept negative index
// console.log(str.substring(0,-1)); // empty string
// console.log(str.substring(0,-2)); // empty string

// // extract the string according to the given number

let str = "captain jack";

// console.log(str.substr(3,2));//ta
console.log(str.substr(-4,2));//ja

// console.log(" white space remove from both ends ".trim());
// console.log(" white space remove from both ends ".trimStart());
// console.log(" white space remove from both ends ".trimEnd());

// splite -> convert string into array based on seprator

let strarr="hello,captain,jack,sparrow"
// console.log(strarr.split(","));
// console.log(strarr.split(",",2));
// console.log(strarr.split(",",10));
// console.log(strarr.split(",",0));
// console.log(strarr.split(",",-1222));


let repl="hello world world";

// console.log(repl.replace("world","JavaScript"));
// console.log(repl.replace("world",));
// console.log(repl.replace("worlds","no effect"));
// console.log(repl.replaceAll("world","js"));

// console.log(repl.repeat(3));
// console.log(repl.repeat(-2));// erro invalid count -2


// console.log("captain".startsWith("c"));
// console.log("captain".startsWith("C"));//false
// console.log("captain".endsWith("n"));
// console.log("captain".endsWith(""));
// console.log("captain ".endsWith("tain "));
// console.log("captain ".endsWith("tain  "));



// console.log(`it
// is
// multiline String
// so if you want to make multiline string,
// use should use this format`);