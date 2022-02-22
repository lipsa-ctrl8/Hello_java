
//1.Ways to print in javascript
//console.log("hello world");
//alert("me");
//document.write("this is document")

//2.Javascript console API
console.log("hello world", 4 + 6, "Another log");
console.warn("This is warning");
console.error("This is error")

//3.Javascript Variables
//What are variables? Container to store data value.
var num1 = 34;
var num2 = 56;
//console.log(num1 + num2);

//4.Data types in javascript
//Primitive data type
//String
var str1 = "This is a string";
//Number
var n = 455;

//Booleans
var a = true;
//null
var p = null;
//underfined
var u = "undefined";

//console.log(u);
//console.log(marks);
//Reference Data types
//Objects
var marks = {
    ravi: 34,
    abhi: 67,
    lipsa: 98
}
// let string = "harry is a good boy good";
// console.log(string.length)
// console.log(string.lastIndexOf("good"))
// console.log(string.slice(1,6))
// d=string.replace("harry","rohan");
// console.log(d,string)
let dt= new Date();
console.log(dt.getTime())

//Dom manipulation
let elem = document.getElementById("click");
console.log(elem)
let elemcls = document.getElementsByClassName("container")
console.log(elemcls)
console.log(elemcls[0])

