// // set in  detail in js
// a Set is a built-in object that lets you store unique values of any type — primitives or object references.


// const emptySet = new Set();
// console.log(emptySet);

// let arr = [1, 2, 2, 3, 4, 5, 5]
// const iterableArray = new Set(arr)
// console.log(iterableArray);

// let string = "aabccdfghh"
// const strSet = new Set(string)
// console.log(strSet);




// let set = new Set();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };
// let sam = { name: "Sam" };

// // visits, some users come multiple times
// const set = new Set();
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);
// set.add(sam);
// set.add(john);

// set.forEach((elem,index)=>{
//   console.log(elem);
// })

// const set=new Set();
// set.add(10)
// set.add(20)
// set.add(30)
// const elm=set.add(50).add(60)
// console.log(elm);//return complete set
// set.delete(10,20,30)//only 10 will be delete
// set.delete(20)
// console.log(set);

// set.forEach((item,index)=>{
//   console.log(item,index);
// })
// const valExist=set.has(10);
// const valNotExis=set.has(200);
// console.log(valExist,valNotExis);


// const val=set.delete(10);
// console.log(set);
// console.log(val);


// let deleted=set.delete(10);//return true
// let deleted=set.delete(100);//false
// console.log(deleted);

// const val=set.clear();//return undefined
// console.log(val);

// set.clear()
// console.log(set.size);

// const emptySet=new Set();
// console.log(emptySet.size);//0


// it is iterable but it also provide for each method
// forEach method can apply on it
// const set=new Set([1, 2, 2, 3, 4, 5, 5]);

// set.forEach((item)=>{
//   console.log(item);
// })


// for (const element of set) {
//   console.log(element);
// }

// const values=set.values();
// console.log(values);

// for (const element of set) {
//   console.log(element);
// }

// string is iterable but it doesn't provide forEach method

// "hello".forEach(element => {
//     console.log(element); 
// });

// set.forEach(element => {
//     console.log(element); 
// });

// for (const char of "hello") {
//   console.log(char);
// }

// const keys=set.keys();// work same as values becouse set only cotains keys

// keys.forEach(element => {
//   console.log(element);
// });




// const set=new Set([1, 2, 2, 3, 4, 5, 5]);

// const entries=set.entries();
// console.log(entries);//return iterator object like [val,val]pair becouse set includes key as value key and val are same

// entries.forEach(element => {
//   console.log(element);
// });


// set is not a array so array method does apply on it directly but we can change set into array
// const set=new Set([1, 2, 2, 3, 4, 5, 5]);
// const array=Array.from(set)
// console.log(array);//converted into array



// usage 

// const array=[1,1,2,3,4,5,5,5,5,5,5,6,7,8,9,9,9,9,10]
// const newSet=new Set(array)
// const uniqueArray=Array.from(newSet)
// console.log(uniqueArray);

// const allowed = new Set(['admin', 'editor']);

// console.log(allowed.has('admin'));  // true
// console.log(allowed.has('guest'));  // false


// const visitedPages = new Set();
// visitedPages.add("/home");
// visitedPages.add("/about");
// visitedPages.add("/home"); // ignored
// console.log(visitedPages.size); // 2




// const a = new Set([1, 2, 3]);
// const b = new Set([3, 4, 5]);

// const union = new Set([...a, ...b]);
// console.log([...union]); // [1, 2, 3, 4, 5]


// const str = "banana";
// const uniqueChars = [...new Set(str)].join('');
// console.log(uniqueChars); // "ban"





// const setMethodAndReturn={
//   "methods": {
//     "add(value)": "Set",
//     "delete(value)": "boolean",
//     "has(value)": "boolean",
//     "clear()": "undefined",
//     "forEach(callbackFn)": "undefined",
//     "values()": "SetIterator",
//     "keys()": "SetIterator",
//     "entries()": "SetIterator"
//   },
//   "property": {
//     "size": "number"
//   }
// }

