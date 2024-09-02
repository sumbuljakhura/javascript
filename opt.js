

console.log(add(45,15))
console.log(add(52,5))
x=9;
x+=90;	//Increment
console.log(x)
y=90;
y-=89;  //--	Decrement
console.log(y)
console.log(x,y,x<y)
let text1 = 20;
let text2 ="add "+ 5;
// let result = text1 < text2;
console.log(typeof(text2)   
)
console.log(text1===x)// == for check value
// === to chexk value + data type
let firstName="sumbul";
let secondName="saleem";
secondName += " Jakhura" 
let fullName= firstName + " " +secondName;//concatenate
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

// if else
let num1=128;
let num2=46;
if(num2==num1){
    console.log("welcome!")

}
else{
    console.log("bye")
}
let num3=num1+num2;
if(num3 >=150){
    console.log("great")
}
else{
    console.log("smaller")
}
if(num1>= num2 && num1<num2)// both conditions true
{
    console.log("save")
}
else{
    console.log("dlt")
}
if(num1>= num2 || num1<num2)// single condition true
    {
    console.log("save")
}
else{
    console.log("dlt")
}
hour=10
if(hour < 14){
    //block of code
    console.log("Good day")
}
else if( hour < 9)
{
    console.log("good morning")
}
else{
    console.log("Good Night")
}

//functions
function myFun(){
 
    let  a=23 //local var
    let b=24
 console.log(a+b)   
}

// let check=myFun()
// console.log(check)
// function add(num1,num2){
   
//     return num1 * num2 
    
//     // let b=0; function stop
    
// }

// console.log(23-2+45/89*78)//dmas
let named=23;
if (named == 23){
 let numbered=24;
    if(numbered >= 18){
        console.log("true")

    }
    else{
        console.log("false")
    }
}
else{
    console.log("not equal")
}
console.log("hello")   
