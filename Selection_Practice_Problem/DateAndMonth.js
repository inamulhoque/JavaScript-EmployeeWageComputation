const prompt = require("prompt-sync")()
let day = prompt("Enter day: ");
let month = prompt("Enter month: ");
if (day <= 20 && month <=6 || month >=3 && day >=20) {
    console.log("true");
} else{
    console.log("false");
}