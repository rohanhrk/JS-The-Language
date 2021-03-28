//function,arrays,objects
//function definition
// function sayHi(param){
//     //console.log("hello from fn ");
//     console.log("Param is ", param);
//     let rVal=Math.random()>0.5 ?"good" :false;
//     return rVal;
// }
//function invoke
// let ri=sayHi(10);
// console.log(ri);
// let ab= sayHi("assdsfdf");
// console.log(ab);
// let rVal=sayHi([1,2,3,4,5]);
// console.log(rVal);

//arrays
//array->array is a collection of homoganeous data types
//array->array is a collection of anything
//array declare
//let arr=[];
let arr=[
    1,
    1.1,
    "string",
    'single quotes',
    null,
    true,
    [1, 2, 3, 4, 5, 6],
    function inside(param){
        console.log("Hello from an array");
        console.log("I recieved", param);
        return "some value";
    },
    { name: "rohan",
     lastName: "Hazarika"}
]
// console.log(arr);
// console.log("val at index 5",arr[5]);
// console.log("val at index 6",arr[6][3]);
// console.log("last val",arr[arr.length-1]);
// console.log("last val",arr[arr.length-1].name);

//function
// console.log(arr[arr.length-2]);
// console.log(arr[arr.length-2]());
// console.log(arr[arr.length-2]("rohan"));

//console.log(arr.length);
//console.log(arr[arr.length]);

//push-> add last, pop->remove last
// console.log(arr);
// console.log("`````````````````````````````");
// arr.push("last val");
// console.log(arr);

//unshift-> add first, shift-> remove first
// arr.shift();
// console.log(arr);
//slice-> starting index, end index
// let slicedArr= arr.slice(2,5);
// console.log("sliced array", slicedArr);

// console.log("array", arr);
// //splice-> starting index, delete count
// console.log("````````````````````````````````");
// let removedElemArr = arr.splice(2, 3);
// console.log("removedElemArr", removedElemArr);

//loop
for(let i=0; i< arr.length; i++){
    console.log("index", i, "value", arr[i]);
}