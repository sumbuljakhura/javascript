function myFun(num1,num2){
    //block of code
    // console.log(56+56)
    let  number=5;//local
    return num1 * num2
}
console.log(myFun(25,89))
console.log(myFun(5,89))
let number=45
console.log(number)
// object
const obje={
    name:"car",
    age:"24",
    model:"RF185",
    color:"red"
}
console.log(obje.name,obje.color)
const std={
    stdname:prompt("enter your name"),
    stdId:prompt("enter your id")
}
console.log(std)
const tech={
    name:String,
    age:String,
    color:String}


tech.name="sana"
console.log(tech)
let named="joha"
let age=45
console.log("my name is "+ "" +named+"& my age is "+age)


//caLL fun
const objs={
    first:"sana",
    last:"ali",
    fullnmae:function (){
        return this.first +" "+ this.last
    }
}
console.log(objs.fullnmae())
const person={
    fullnames:function(num1,num2){
        return this.first + "   " + this.last+" "+ num1
        +num2;
    }
}
const person1={
    first:"sds",
    last:"s"
}
const person2={
    first:String,
    last:String
}
console.log(person.fullnames.call(person1,2,5))

function myDisplayer(some) {
    return some;
//   document.getElementById("demo").innerHTML = some;
}

function myFirst() {
 console.log(myDisplayer("Hello"));
}

function mySecond() {
  myDisplayer("Goodbye");
}
myFirst();
mySecond()
// setInterval(myFunction, 10);

// function myFunction() {
//   console.log("class");
// }
setInterval(myfun,1000);
function myfun()
{
    let a=  new Date();
    console.log(
    a.getHours() +":"+
    a.getMinutes() +":"+
    a.getSeconds() +":"+
    a.getDate()+":"+
a.getDay()+":"+
a.getMonth());
}
setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
 console.log(
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds());
}
//promise function!!
// if the light is green  
// function is resolve  otherwise function reject
function mydisp(num){
    document.getElementById("fun").innerHTML=num;
}
let myprom=new Promise (function(myResolve,myReject){

let a=50;
if(a<=60){
    myResolve("great")
}
else{
    myReject("try again")
}

});
myprom.then(function(value){
    mydisp(value)
},
function(error){
    mydisp(error)
}
)
//traffic light

function mydisped(color){
    document.getElementById("color").innerHTML=color;
}
let mypromed=new Promise (function(myResolve,myReject){

let a=prompt("enter a color");
if(a == "green"){
    myResolve("start")
}
else{
    myReject("stop ")
}})
mypromed.then(function(value){
    mydisped(value)
},
function(error){
    mydisped(error)
}
)
