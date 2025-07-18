
// let arr2=new Array(1,2,3,4,{"name":"captain"});
// let nar=new Array(5); //not recomended becouse Array(5) work as length 5
// console.log(nar);
// console.log(arr2);

// let arr=[10,20,30,40];

// "use strict"
// let arr=[01]//octal leteral is not allowed
// console.log(arr[0]);

// let arr=[10,20,30,40];
// console.log("Original Array is : ",arr);

// console.log(arr[0],arr[5],arr[-2]);

// console.log(arr.length);

// let ps=arr.push(50);

// console.log(arr,ps);

// let pop=arr.pop();
// console.log(arr,pop);

// let shift=arr.shift();
// console.log(arr,shift);

// let unshift=arr.unshift(786);
// console.log(arr,unshift);


// let orgArr=[1,2,3,4,5,6]

// let rArr=orgArr.reverse();
// console.log(orgArr,rArr);


// let arr=[1,2]

// arr[200]=32;
// console.log(arr);




// cloning array in javaScript
// using slice
//it return the shallow copy of an array without any argument it copy whole array, also takes negative indexes


// let arr=[1,2,3,4,5];
// let newArr=arr.slice(0,arr.length);
// let newArr=arr.slice(0,3);
// let newArr=arr.slice(0,-2);//-2 is 4 but last element is not included

// console.log(arr,newArr);


// const detail = ["orgFElem", {name: "Alice",address: {city: "Wonderland",zip: 12345,nested:{inner:"org"}}},"lastOrg"]

// const copyDetail=detail.slice()
// copyDetail[0]="updFElem"
// copyDetail[1].name="captain";
// copyDetail[1].address.city="Siddharth Nagar"
// copyDetail[1].address.nested.inner="upd"
// detail[2]="updLastElm"
// detail[1].address.zip=786;



// console.log(detail[0],copyDetail[0]);
// console.log(detail[1].address.city,copyDetail[1].address.city);
// console.log(detail[1].address.nested.inner,copyDetail[1].address.nested.inner);
// // copyDetail[1]={}
// console.log(detail,copyDetail);




// using spread operator, return new array and creates a shallow copy

// let arr=[1,2,3,4,{"address":{"city":"maharajganj"}}];
// let newArr=[...arr];
// newArr[4].address.city="Siddharth nagar"
// newArr[0]=10;
// console.log(arr[4].address.city);
// console.log(arr,newArr);

// const merged=[...arr,...[6,7,8]]
// console.log(merged);





// using Array.from(arr,mapFun) it return the new array with shallow copy and takes two argument one is array like object and second one is map function, without map function it return same elements


// let arr=[1,2,{"address":{"city":"maharajganj"}},5];

// let newArr=Array.from(arr);
// newArr[2].address.city="Siddharth nagar"
// console.log(newArr);
// console.log(arr[2].address.city);

// const arrLike = [10, 20, 30,40];
// const newArray = Array.from(arrLike, (x, index) => {
//     return x + index;
//   });

  // const newArray = Array.from(arrLike, (x, index) => {
  //   return 5;
  // });

  // const newArray = Array.from(arrLike, (x, index) => {
  //   return;
  // });
  // const newArray=Array.from(arrLike)

// console.log(newArray);  // [10, 21, 32]

// using concate, concate multiple array and combine it and gives the shallow copy

// const arr1 = [1,{"address":{"city":"sd"}}, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = arr1.concat(arr2,100,200,400);
// const combined = arr1.concat(arr2,[100,200,400],800);
// console.log(combined);


{

  // both works similarly becouse cocate method desing to combine array or values as well only first level nested property works like nested works
  // let arr = [1, 2];

  // // Adding individual values
  // arr.concat(3, 4)               // [1, 2, 3, 4]

  // // Adding arrays
  // arr.concat([3, 4])             // [1, 2, 3, 4]

  // // Mixing arrays + values
  // arr.concat([3, 4], 5, 6)       // [1, 2, 3, 4, 5, 6]

  // // Nested arrays
  // arr.concat([3, [4, 5]])        // [1, 2, 3, [4, 5]] ← only one-level flattening
  //  Key Things to Remember:
  // concat() returns a new array – it doesn't change the original one.

  // It flattens only one level of arrays.

  // It's super useful when combining arrays and individual elements all at once.

}



// const arr1 = [1,{"address":{"city":"maharajganj"}}, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = arr1.concat(arr2);
// console.log(combined);

// combined[1].address.city="siddharth nagar"
// console.log(arr1[1].address.city);
// console.log((combined)[1].address.city);  

// const arr1 =[1,2];
// const arr2 =[3,4];
// const combined = arr1.concat(arr2,[100, 200, 400]);
// console.log(combined);  

// let arr=[1,2,3]
// let newArr=arr.concat([1,2,3,4],55,66,[32,44])
// let newArr=arr.concat(1,2,3,4,55,66,32,44)
// console.log(newArr);
// require('util').inspect.defaultOptions = { compact: true };

// console.log([1,2,3,4,5,6,7]);
// console.log([1, 2, 3, 4, 5, 6, 7]);
// console.log({ name: "Captain", age: 22 });


// using JSON.parse(JSON.stringify(data))

// it create deep nested object and array cloned completed
// what this method actually does

// Converts your data into a JSON string
// Then parses that string back into a new object or array


// const arr = [1, 2, { name: 'Alice',address:{"lin1":"chpwa"} }];

// let deepCopy=JSON.parse(JSON.stringify(arr));
// const deepStr=JSON.stringify(arr)
// console.log(deepStr);
// console.log(typeof(deepCopy),typeof(deepStr));

// what actully happend
// Step 1: JSON.stringify(arr)
// This turns your array into a JSON string:
// '[1,2,{"name":"Alice"}]'

// Step 2: JSON.parse(...)
// Now it takes that string and parses it back into a new array with new objects inside:
// [1, 2, { name: 'Alice' }]

// verification
// const arr = [1, 2, { name: 'Alice',address:{"city":"MaharajGanj"} }];
// const deepCopy=JSON.parse(JSON.stringify(arr))
// deepCopy[2].address.city="Siddhart Nagar"
// deepCopy[0]=786


// console.log(arr,deepCopy);









// using structured clone 
// const cloned = structuredClone(value);


// 🔹 What is Structured Cloning?
// structuredClone() is a built-in method in JavaScript that creates a deep copy of almost any kind of data — safely and easily — including things that JSON.parse(JSON.stringify(...)) can't handle. 

// const arr = [1, 2, { name: 'Alice',adress:{city:"maharajganj"} }];
// const copy = structuredClone(arr);

// copy[2].name = 'Bob';
// copy[2].adress.city="siddharth Nagar"

// console.log(arr);  // [1, 2, { name: 'Alice' }]
// console.log(copy); // [1, 2, { name: 'Bob' }]



// structuredClone() is far more powerful than JSON.parse(JSON.stringify(...)) for deep cloning.

// It can clone complex data types like Date, RegExp, Map, Set, BigInt, and handle circular references without errors.

// JSON.parse(JSON.stringify(...)) is still useful but limited to simpler data types.



// use cases 

// Use JSON.parse(JSON.stringify(...)) when you have a simple object (no circular references, no complex data types like Date, RegExp, Map, Set, etc.) and want a quick deep clone.

// Use structuredClone() when you need to clone complex objects with circular references or non-serializable data types (Date, Map, Set, RegExp, BigInt, etc.) and require deep cloning without data loss.







// structure clone is better becouse it handles these things

// A simple object with various types

// const original = {
//     name: "Alice",
//     age: 30,
//     createdAt: new Date('2025-04-15'),  // Date object
//     regex: /abc/i,                      // RegExp object
//     map: new Map([['key1', 'value1']]), // Map object
//     set: new Set([1, 2, 3]),            // Set object
//     bigInt: 1234567890123456789012345678901234567890n,  // BigInt value
//     circularRef: null                   // Circular reference placeholder
//   };

// Creating circular reference
  // original.circularRef = original;

  // Cloning using JSON (Will fail on circular reference)
  // const jsonCloned = JSON.parse(JSON.stringify(original));  // This will throw an error

  // Cloning using structuredClone
  // const structuredCloned = structuredClone(original);



  // Output results
  // console.log("Original:", original);
  // console.log("JSON Cloned:", jsonCloned);  // Will be null due to error
  // console.log("Structured Cloned:", structuredCloned);  // Deep cloned with complex types intact

//   console.log(original.circularRef === original);  // true (circular reference intact)
//   console.log(structuredCloned.circularRef === structuredCloned);  // true (circular reference intact)

//   const comparison = [
//     {
//       feature: "Circular references",
//       "JSON.parse(JSON.stringify(...))": "Throws an error (TypeError)",
//       "structuredClone()": "Works correctly, clones circular references"
//     },
//     {
//       feature: "Date objects",
//       "JSON.parse(JSON.stringify(...))": "Converted to string",
//       "structuredClone()": "Preserved as Date"
//     },
//     {
//       feature: "RegExp objects",
//       "JSON.parse(JSON.stringify(...))": "Lost",
//       "structuredClone()": "Preserved as RegExp"
//     },
//     {
//       feature: "Map and Set",
//       "JSON.parse(JSON.stringify(...))": "Lost",
//       "structuredClone()": "Preserved"
//     },
//   {
//     feature: "BigInt",
//     "JSON.parse(JSON.stringify(...))": "Throws an error (TypeError)",
//     "structuredClone()": "Preserved"
//   }
// ];




//for loop in array

// const fruits = ["Apple", "Banana", "PineApple", "Cherry"];

// for(let i=0; i<fruits.length; i++){
//   console.log(fruits[i]);
// }

// while loop in array
// let i=0;

// while(i<fruits.length){
//   console.log(fruits[i]);
//   i++;
// }

// let i = 0;
// do {
//   console.log(fruits[i]);
//   i++;
// } while (i < fruits.length)


// const stack = [1,2,3,4,5,6];

// do {
//   const item = stack.pop();
//   console.log(`Processing item: ${item}`);
// } while (stack.length > 0);



// for of loop// used to iterate over iterable objects like arrays string map set etc, it gives direct value no need of index


// let str="hello captain";

// for (const char of str) {
//   console.log(char);
// }

// const fruits=44;// fruits is not iterable error
// const fruits = ["Apple", "Banana", "PineApple", "Cherry"];

// for(const elm of fruits){
//   console.log(elm);
// }

// for(const [elm,k] of fruits){
//   console.log(elm,k);
// }




// for in loop used to iterate over key  or properties name of an objct or the index of an array is specifically desined for enumeration properties of object and array like structure




// const fruits = ["Apple", "Banana", "PineApple", "Cherry"];

// for(const key in fruits){
//   console.log(`key is ${key} and value is ${fruits[key]}`);// 0 1 2 3
// }

// let obj={
//   'name':"captain",
//   "email":'captain@gmail.com',
//   "pass":"xyz",
//   "rollNo":"955414"
// }

// for(const key of obj){
//   console.log(key);//object is not iterable error
// }

// for(const key in obj){
//   console.log(`${key} is:`,obj[key]);
// }

// let str="hell world"
// for(const key in str){
//   console.log(key);// 0 1 2 3 4 5 6 7 8 9
// }


// array distructuring 

// it is a feature in js that allow you to extrac values from an array and assign them to variables in a convince and relaible way

// const [v1,v2,v3,v4,v5="fifth",v6]=["first","second",'third',"fourth",undefined]
// console.log(v1,v2,v3,v4,v5,v6,v7=55);//first second third fourth fifth undefined 55
// console.log(k=44);


// swaping value

// let x=10,y=20;
// console.log(x,y);
// [x,y]=[y,x]
// console.log(x,y);

// rest parametor // work with diffrent scinarios, The rest parameter in JavaScript allows a function to accept an indefinite number of arguments as an array.



// const arr=[1,2,3,4,5,6];
// let [x,y,...rest,p]=arr;//error rest element must be at last
// let [...p,x,y]=arr;//same error
// let [x,y,...rest]=arr;
// console.log(x,y);
// console.log(rest);//[3,4,5,6]

// destructuring in function and loop

// const getVal=function(){
//   return [1,2]
// }

// const [x,y]=getVal();
// console.log(x,y);

// const getLoop=[["captain",23],["sodi",14]]

// for(const [name,age] of getLoop){
//   console.log(name,age);
// }




// most importaint Array method in javaScript
// most importaint Array method in javaScript
// most importaint Array method in javaScript
// most importaint Array method in javaScript
// most importaint Array method in javaScript
// most importaint Array method in javaScript
// most importaint Array method in javaScript



// forEach
// iterate over array and return provided function for each element, doesn't return anything; it takes a callback function otherwise show error undefined is not a function

// syntac: arr.forEach((elem,index,arr),thisArgs);

// thisArgs is a argument which passed as the place of this

// let arr=[1,2,3,4,5]
// arr.forEach()//error provide a call back function


// arr.forEach(function (elem,index,arrs){
// console.log(elem,index,arrs);
// console.log(this);
// })// in this case this takes window object

// // pass obj as this

// let arr=[1,2,3,4,5]
// const obj={"name":'captain'}
// arr.forEach(function (elem,index,arrs){
//     console.log(elem,index,arrs);
//     console.log(this);
// },obj)



// const obj={"role":"Struggle global"}

// const user={
//     role:'Engineer',
//     data:[1,2,3,4,5,6],
//     showUserDef:function (){
//         data.forEach(function (element) {
//             console.log("showUserDef",this.role);
//         });
//     },
//     showUserDefArrow: function(){
//         data.forEach( (element) =>{
//             console.log("showUserDefArrow",this.role);
//         });
//     }
//     ,
//     showUserThis:function (){
//         data.forEach(function (element) {
//             console.log("showUserThis",this.role);
//         },this);
//     },
//     showUserArrowThis: function(){
//         data.forEach( (element) =>{
//             console.log("showUserArrowthis",this.role);
//         },this);
//     }
//     ,
//     showUserAnoThis:function (){
//         data.forEach(function (element) {
//             console.log("showUserAnoThis",this.role);
//         },obj);
//     },
//     showUserAnoArrowThis: function(){
//         data.forEach( (element) =>{
//             console.log("showUserAnoArrowthis",this.role);
//         },obj);
//     }
// }

// const data=[1,2,3,4,5,6]
// window.Object.prototype.role="windowRole"// now by default callback inside forEach takes window object now the value of bydefaul role will be windowRole
// user.showUserDef()//windowRole
// user.showUserDefArrow();//engineer this not work
// user.showUserThis();//Engineer
// user.showUserArrowThis();// engineer this not work
// user.showUserAnoThis();//Struggle
// user.showUserAnoArrowThis();//engineer this not work


// this inside callback would be undefined by passing this inside for each this prefer the current object (user) otherwise it will prefer the global window object and if we put window.prototype.role="admin" then it shows the value 
// learn the thisArgs in detail in the next section where i have to learn this in detail


// Map method used to transforming array it create a new array by appling callback function
// arr.map((elem,index,arr),thisArgs);
// takes a callback function; if callback function doesn't return anything then by default it retuns undefined
//execute for undefined but not for empty slot and forEach also new array contains empty slot also

// const arr=[1,2,,undefined,3,4,5,,"last"]
// const newAr=arr.map((elem,index,arr)=>{
// console.log(elem);
// // return elem*2;//return with multiplication of 2
// })

// const na=arr.map((elm)=>elm)
// console.log(na);

// console.log(newAr);
// console.log(arr.length,newAr.length);

// console.log(newAr);//undefined without return
// // most useful in react js for extracting values and return it as array


// const arrObj=[{"name":"captain","role":"software Engineer"},{"name":"sodi","role":"Student"},{"name":"sakib","role":"Gamming"}]

// let names=arrObj.map((elem,index)=>{
//     return elem.name;
// })
// console.log(names);

// let roles=arrObj.map((elem,index)=>{
//     return elem.role;
// })

// console.log(roles);



// filter 
// filter method in jsis used ot create a new array cocntaingin only the element that satisfy a given conddition (element for whichc the callback functioon return true) skip element those doesn't meet the condition;  it takes a callback funtion oterwisee error undefined is not a function

// syntax arr.filter((elem,index,arr)=>{},thisArgs)

// const arr=[0,1,2,3,4,5]

// let even=arr.filter((elem)=>{
//     if(elem%2==0){
//         return true;
//     }
//     return false;
// })

// // in short


// let evenSort=arr.filter((elem)=>elem%2==0)
// console.log(even);
// console.log(evenSort);

// const arr=[{"name":"captain","role":"Engineer"},{"name":"sodi",role:"student"},{"name":"sakib",role:"Gamer"},{"name":"captain","role":"Engineer"},{"name":"sodi",role:"student"},{"name":"sakib",role:"Pro Player"}]

// const user=arr.filter((usr)=>usr.name==="sakib");
// console.log(user);


// reduce

// it iterate the array and reduce the array value into single value useul for summing numer counting etc

// syntax: arr.reduce(callback(accumalator,curtVal,crtIndex,Array),initialVal)

// if initial value is not provided then acum initial value will  be the first element of array and iteration start from second element if provided then iteration start from first element// at the last the single value is returned without return statement undefined is returned

// don't be confused it works simply but accumulator is a value that is by defaul the first element and if provided then it is takes intialValue and in the return any thing can be returned but single value will be returned; it can be array object anything; but at the last the value is returned;
//  every time the return value will be the accumulator value and at the last the acumulator value will be return as result

// let arr=[1,2,3,4]

// let sum=arr.reduce((acum,elem)=>{
//     // console.log(acum,elem);
//     // acum=acum+elem;
//     return acum;
// },10)
// console.log(sum);

// // in short
// let sumSort=arr.reduce((acum,crtVal)=>acum+crtVal)
// console.log(sumSort);

// learn in detail 


// sort method in array is used to sort the element as string in asceding order and return sorted element; modify the original array as well 

// syntax: arr.sort(compareFunctionOptional)

// let unSort=[2,3,7,8,1,4,5]
// let sort=unSort.sort()
// console.log(unSort,sort);

// problem
// let uns = [100, 50, 400, 30, 20, 110]
// let sort=uns.sort();
// console.log(sort);//[100, 110, 20, 30, 400, 50]

// solve using compare function
// let sort = uns.sort((a, b) => {//a=50 b=10 (first iteration) a=400 b=50 (second iteration)
//     // return 10; // not effected compare function is a special function
//     return a-b;
// })

// console.log(sort);

let uns = [100, 50, 400, 30, 20, 110]
// let sortDes = uns.sort((a, b) => {//a=50 b=10 (first iteration) a=400 b=50 (second iteration)
//     return b-a;
// })

// console.log(sortDes);


// if a-b is negative a come before b if negative then b come before a and if zero the order will unchanged


// find: this method is used to search and array and return the first element that  satisfied a given condition if no element  meeet the condition it return undefined

// syntax : arr.find(callback(elem,index,arr),thisArg);


// const arr=[1,2,3,4,5];

// let result=arr.find((elem)=>{
//     if(elem==5){
//         return true;
//     }

// })
// console.log(result);


// let result=arr.find((elem)=>elem==3)
// console.log(result);


// const users=[{"name":"captain","role":"Engineer"},{"name":"sodi",role:"student"},{"name":"sakib",role:"Gamer"}]

// const user=users.find((urs)=>urs.name=="captain")

// const user=users.find((urs)=>urs.name=="sakib" && urs.role=="Gamer")
// console.log(user);//{name:"captain",role:"Engineer"}

// findLast start from last index and find last element

// const arr=[{"name":"captain","role":"Engineer"},{"name":"sodi",role:"student"},{"name":"sakib",role:"Gamer"},{"name":"captain","role":"Engineer"},{"name":"sodi",role:"student"},{"name":"sakib",role:"Pro Player"}]

// const user=arr.findLast((usr)=>usr.name=="sakib");
// console.log(user);

// const index=arr.findIndex((elem)=>elem.name=="sakib")
// console.log(index);

// const index=arr.findLastIndex((elem)=>elem.name=="sakib")
// console.log(index);

// return -1 when no element is found

// const index=arr.findLastIndex((elem)=>elem.name=="unknown")
// console.log(index);


// every method return true if all element of array satisfied a given condition oterwise it return false

// let arr=[1,2,3,4,5]

// let result=arr.every((num)=>typeof num=="number")
// console.log(result);

// let arr=[1,2,3,4,5,{}]

// let result=arr.every((num)=>typeof num=="number")
// console.log(result);

// let empy=[,,,] 
// console.log(empy.length);//3

// let result=empy.every((elm)=>{elm==elm>10})
// let result=empy.every((elm)=>{elm==undefined})
// console.log(result);//true becouse there is nothing to check same if there is empty elements


// let empy=[,,,undefined]
// let result=empy.every((elm)=>{elm>10})
// console.log(result);//false undefinded will be checked


// some check atleast one element satisfied the conditio

// let arr=[1,2,3,4,5,6,7,8]
// let result=arr.some((elem)=>elem>3)
// console.log(result);

// let arr=[,,,,]; 
// let result=arr.some((elm)=>elm>40)
// console.log(result);
// //false no element is there which satisfied the condition and make statement true


// fill method used to replace all or part fo the element in a array with static value and return new array and also modify the original array
// syntax : arr.fill(val,start,end) end index is not included

// let arr=[1,2,3,4,5]
// // arr.fill(786,,4)//error
// arr.fill();//undefined all
// console.log(arr);

// let result=arr.fill(10)
// console.log(result,arr);



// let arr=[1,2,3,4,5]
// let result=arr.fill(10,1,3)
// console.log(result,arr);

// let arr=[1,2,3,4,5]
// // arr.fill(786,2)// 1 2 786 786 786
// console.log(arr);

// let empty=[,,,,,]
// empty.fill(1)
// console.log(empty);




// splice method in array
// splice method in array
// splice method in array
// splice method in array


// used to perform add delete modify operation on array it modify the original array and return removed element

// syntax: arr.splice(start,deletecount,item,item2,...,itemN)

// const arr=[1,2,3,4,5,6,7,8,9,10]
// arr.splice()//no efffect

// remove element

// const elem=arr.splice(3,2)//start at index 3 and remove 2 element 4 5 removed
// console.log(elem);

// arr.splice(2)// start from index 2 and remove all
// console.log(arr);

// const arr=[10,20,30,40,50]

// // insert element
// let rm=arr.splice(3,0,35,36)//addiing start at 3 index [10, 20, 30, 35, 36, 40, 50]
// console.log(arr,rm);//rm will be []

// replacing element
// const arr=[10,20,30,40,50]
// // replace 20 with  200
// const elem=arr.splice(1,1,200);

// console.log(arr,elem); //[20]

// const arr=[10,20,30,40,50]
// arr.splice(2,2,25,26)
// console.log(arr);


// remove all element and from index

// const arr=[10,20,30,40,50]
// // let removed=arr.splice(0)
// let removed=arr.splice(2)
// console.log(arr,removed);

// using negative index

// let arr=[10,20,30,40,50]
// let result=arr.splice(-4,2)// -1 is last element -4 is 2
// console.log(result);// [2 3]



// let arr=[10,20,30,40]

// let entries=arr.entries();
// let keys=arr.keys();
// let values=arr.values();

// these are Iterator so it can be iterate using  for of loop

// for(const entry of entries){
//     console.log(entry);
// }

// for(const key of keys){
//     console.log(key);
// }

// for(const value of values){
//     console.log(value);
// }


// 786 is the lucy number i'm ending over here today 23/04/25
// 786 is the lucy number i'm ending over here today 23/04/25
// 786 is the lucy number i'm ending over here today 23/04/25



// copywithin it copy the element and  paste is in the same array and doest effect the length it is kind of replacement element  with the same array element
// syntax: arr.copyWithing(target,start,end)
// target : where the copied element will be pasted 
// start : from where the copy will start (default=0)
// end  : where the copy will be stop last element will not included

// let arr=[1,2,3,4,5,6,7,8,9,10]
// let result=arr.copyWithin(1,4,5)//5 wll be copy 
// console.log(arr);//[1, 5, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(result);// return modified array


// let arr=[1,2,3,4,5,6,7,8,9,10]
// arr.copyWithin(1,2,2)//nothing will be copy
// console.log(arr);


// toSorted : return new sorted array without effecting original it is imutable intruduce es2023

// let arr=[1,7,9,8,5,2]
// let sArr=arr.toSorted()
// console.log(arr,sArr);

// toReversed : similar to reverse but immutable


// let arr=[1,2,3,4,5]
// let sArr=arr.toReversed()
// console.log(arr,sArr);


// toSplite : similar to splite it return modified array with specified element remove , replace, insert, without modifiying original array; doesn't return removed element


// let arr=[1,2,3,4,5]
// let sArr=arr.toSpliced(1,2)
// console.log(arr,sArr);


// with : this method  create new array with a specific element removed without at a given index without original array modified
// syntax : arr.with(index,value)// index is required but and the index should not be out of bounce value is optional if it will be blank then it will be undefined

// const arr=[1,2,3,4,5]
// const newArr=arr.with(1,786)
// const newArr=arr.with(,786)//erro unexpected token
// const newArr=arr.with(22,786)//invalid index
// const newArr=arr.with(-1,786)// last index
// const newArr=arr.with(1,)// index 1 will be undefined

// console.log(arr,newArr);

// includes : it check a specific element a array holds or not and return true or false based on the existance or not existance

// const arr=[1,2,3,4,5]
// const result=arr.includes(4)
// const result=arr.includes(66)
// console.log(result);


// extra thing about array

// array like object learn in detail 4/24/2025
//console.log(new Date().toLocaleDateString()); get date
