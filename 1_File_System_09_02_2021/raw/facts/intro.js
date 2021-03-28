//no main
//left to right to to bottom
console.log("Hello PAB:");
//variable declare
//a is variable that can only contain an integer
//statically typed lang
//int a;
//dynamically typed
//let->a is variable that initially contains undefined
//primitive types: number,string,boolean, undefined,null
let a;
//number
a=10;
a=10.1;
//string
a="string";
console.log("a is", a);
a=null;
//js syntax->java

let input=process.argv.slice(2);
console.log(input);
let num=input[0];
let flag=true;
for(let div=2;div*div<=num;div++){
    if(num%div==0){
        flag=false;
        break;
    }
}
if(flag==true){
    console.log(num, "Is prime");
}
else{
    console.log(num, "Is not prime");
}