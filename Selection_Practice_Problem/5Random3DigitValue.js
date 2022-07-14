let randNum1 = Math.floor(Math.random()*(999-100+1)+100);
let randNum2 = Math.floor(Math.random()*(999-100+1)+100);
let randNum3 = Math.floor(Math.random()*(999-100+1)+100);
let randNum4 = Math.floor(Math.random()*(999-100+1)+100);
let randNum5 = Math.floor(Math.random()*(999-100+1)+100);
console.log("*************Largest number*************");
if(randNum1>randNum2 && randNum1>randNum3 && randNum1>randNum4 && randNum1>randNum5){
    console.log(randNum1+" is largest.");
} else if(randNum2>randNum1 && randNum2>randNum3 && randNum2>randNum4 && randNum2>randNum5){
    console.log(randNum2+" is largest.");
} else if(randNum3>randNum1 && randNum3>randNum2 && randNum3>randNum4 && randNum3>randNum5){
    console.log(randNum3+" is largest.");
} else if(randNum4>randNum1 && randNum4>randNum2 && randNum4>randNum3 && randNum4>randNum5){
    console.log(randNum4+" is largest.");
} else if(randNum5>randNum1 && randNum5>randNum2 && randNum5>randNum3 && randNum5>randNum4){
    console.log(randNum5+" is largest.");
}

console.log("**************Smallest number***************");
if(randNum1<randNum2 && randNum1<randNum3 && randNum1<randNum4 && randNum1<randNum5){
    console.log(randNum1+" is smallest.");
} else if(randNum2<randNum1 && randNum2<randNum3 && randNum2<randNum4 && randNum2<randNum5){
    console.log(randNum2+" is smallest.");
} else if(randNum3<randNum1 && randNum3<randNum2 && randNum3<randNum4 && randNum3<randNum5){
    console.log(randNum3+" is smallest.");
} else if(randNum4<randNum1 && randNum4<randNum2 && randNum4<randNum3 && randNum4<randNum5){
    console.log(randNum4+" is smallest.");
} else if(randNum5<randNum1 && randNum5<randNum2 && randNum5<randNum3 && randNum5<randNum4){
    console.log(randNum5+" is smallest.");
}