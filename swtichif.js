let named=25;
if (named ==23){
 let numbered=11;
 console.log("right")
    if(numbered >= 18){
        console.log("true")

    }
    else if(numbered <=10){
        console.log("samller")
    }
else{
    console.log("false")
}
}

else{
 //   console.log("not equal")
}
//let name=prompt("enter your naam");
let ageed=prompt("enter your age");
console.log(ageed)
if(ageed>=18)
{
    let username=prompt("enter your naam");
    let pass=prompt("enter your naam");
    if(username=="sana18" && pass== 2052){
  //  console.log("login")
   }
else{
    console.log("invalid user name or password")
}
}
else{
    console.log("create account")
}

//swtich
// let age =prompt("enter your age for check case");
switch(ageed){
    case "14":
        console.log("your age is 14")
// break;
case "18":
case "17":
    console.log("your age is 18")
    break;

    
 case "19":
    console.log("19") 
    break;  
  default:
    console.log("not")  
}
switch (new Date().getDay()) {
  case 0:
    console.log("Sunday") ;
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
   console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
let num=prompt("Enter your number");
if(num < 0){
    console.log("neg")

}
else{
    console.log("post")
}


 let (x = 10);
let (x += 2);
console.log(x)

//if(add>0){
   // console.log("even")
//}
//else(
//    console.log()
//)
let num1=10;
let num2=5;
console.log (num1+num2)