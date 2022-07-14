let isAbsent = 0;
let isPartTime = 1;
let isFullTime = 2;
const perHourRate = 20;
let partTimeHour = 4;
let fullTimeHour = 8;
let empHours1 = 0;

let empCheck1 = Math.floor(Math.random()*10)%3;
switch (empCheck1) {
    case isPartTime:
        console.log("Employee is part time present.");
        empHours1 = partTimeHour;
        break;
    case isFullTime:
        console.log("Employee if present full time.");
        empHours1 = fullTimeHour;
        break;
    default:
        console.log("Employee is absent");
        empHours1 = 0;
}
let empWage = empHours1 * perHourRate;
console.log("Daily wage of Employee is "+empWage);

console.log("**************************************");
console.log("Refactor using functions");
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case isPartTime:
            return partTimeHour;
        case isFullTime:
            return fullTimeHour;
        default:
            return 0;
    }
}
let empHours = 0;
let empCheck = Math.floor(Math.random()*10)%3;
empHours = getWorkingHours(empCheck);
let wage = empHours*perHourRate;
console.log("Employee daily wage is "+wage);