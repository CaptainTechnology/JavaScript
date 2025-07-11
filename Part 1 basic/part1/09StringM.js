// string concatenation 

// let string1 = "17";
// let string2 = "10";
// let newString = +string1 + +string2;
// console.log(newString);

// console.log(typeof newString);


// useful string methods by captain


function cLength(str) {
    let length = 0;
    if (typeof str !== "string") {
        return console.error("it is not a string");
    }
    let index = 0;
    while (str[index] !== undefined) {
        length++;
        index++;
    }
    return length;
}

function concate(...str) {
    let newString="";
    if (str.length <= 0) {
        return;
    }

    for (let i = 0; i < str.length; i++) {
        if (i === 0) {
            newString = str[i];
            continue;
        }
        newString += str[i];
    }

    return newString;


}

function toUpperCase(str) {
    let result="";
    // console.log(String.fromCharCode(99 - 32));

    if (str === undefined && typeof str !== "string" && str?.str.length <= 0) {
        return;
    }

    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);

        if(charCode>=97 && charCode<=122){
            result+=String.fromCharCode(charCode-32);
        }else{
            result+=str[i];
        }

    }

    return result;

}
function toLowerCase(str) {
    let result="";
    // console.log(String.fromCharCode(99 - 32));

    if (str === undefined && typeof str !== "string" && str?.str.length <= 0) {
        return;
    }
   

    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            // Convert to lowercase by adding 32
            result += String.fromCharCode(charCode + 32);
        } else {
            // If not an uppercase letter, keep the character as is
            result += str[i];
        }

    }

    return result;

}




let str1 = "Hello";
let str2 = "Captain";

console.log(toUpperCase("hello captain jack"));
console.log(toLowerCase("hello captain jack"));




































