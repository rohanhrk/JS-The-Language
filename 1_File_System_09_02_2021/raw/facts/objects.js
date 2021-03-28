//to declare an object
//let obj={}
//hashmap, dict, unordered map
//JSON-> Javascript object notation
//function fn() {
    //console.log("outer");
// }
//object->variables->proper  ty
//object->functions-> method
let cap={
    name: "Steves",
    lastName: "Rogers",
    friends: ["tony", "peter", "bruce"],
    isAvenger: true,
    age: 35,
    address: {
        state: "New York",
        city: "Manhatten"
    },
    abc: null,
    saysHi: function fn() {
        console.log("cap say's hi");
        return "cap send blessings";
    }
}
//print
// console.log(cap);
//get
// console.log(cap.name);
// console.log(cap.lastName);
// console.log("My friend is", cap.friends[1]);
// console.log("city name is", cap.address.city);
// console.log("address is", cap.address);
// cap.saysHi();
// console.log("before");
// console.log("return val is", cap.saysHi());
// console.log("After");
// console.log(cap.abc);

//for in
let name= "lastName";
// console.log("adrres is", cap[name]);
// console.log("address is", cap.name);
//loops
// for(let key in cap){
    //variable
    //let key
    //property
    //object.key
    // console.log("key :", key, "value :", cap[key]);
// }

//create update
console.log(cap);
// cap.isAvenger = false;
console.log("''''''''''''''''''''''''''");
// cap.movies = ["First Avenger", "Civil War", "Age of Ultrons"];
// console.log(cap);

//delete
delete cap.age;
console.log(cap);