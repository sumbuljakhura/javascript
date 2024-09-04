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
console.log(`my name is ${named} & my age is ${age}`)