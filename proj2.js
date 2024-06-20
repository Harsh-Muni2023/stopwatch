// document.getElementById("myh").textContent = 'Hello';
// document.getElementById("myp").textContent = 'hi i am harsh of UP';

// let userName = window.prompt("Please enter your username name");
// console.log(userName);

// let username;

// document.getElementById("mysubmit").onclick = function() {
//     username = document.getElementById("myid").value;
//     document.getElementById("age").textContent =  document.getElementById("myage").value ;
//     document.getElementById("text").textContent = username;
//     console.log(username);
// }

// let age = window.prompt("enter age ");
// // age++;
// age = Number(age);
// age+=1;
// // let val = `your age : ${age}`;
// // console.log(val);
// console.log(age);

/* let inital = 0;
document.getElementById("mytop").textContent = inital;
let increase = document.getElementById("inc");
increase.textContent = "increase";
let decrease = document.getElementById("dec");
decrease.textContent = "decrease";
let reset = document.getElementById("reset");
reset.textContent = "reset";


increase.onclick = function() {
    inital++;
    document.getElementById("mytop").textContent = inital;
}

reset.onclick = function() {
    inital = 0;
    document.getElementById("mytop").textContent = inital;
}

decrease.onclick = function() {
    inital--;
    document.getElementById("mytop").textContent = inital;
} */

/* const display = document.getElementById("number");
const cel = document.getElementById("celcius");
const far = document.getElementById("farenhite");
const output = document.getElementById("myresult");
const click = document.getElementById("submit");
let temp = 0;
function convert(){
    if(cel.checked){
        temp = Number(display.value);
        temp = temp * 9 / 5 + 32;
        output.textContent = temp.toFixed() + "F";
    }
    else if(far.checked){
        temp = Number(display.value);
        temp = (temp - 32)*(5/9);
        output.textContent = temp.toFixed() + "C";
    }
    else{
        output.textContent = "select a unit";
    }
} */

/* let length  = 12;
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let number = "0123456789";
let symbol = "!@#$%^&*()-+<>?";

let genPassword = '';

while(genPassword.length < length){
    genPassword+= lowerCase[Math.floor(Math.random()*12)] +
                  upperCase[Math.floor(Math.random()*12)] + 
                  number[Math.floor(Math.random()*12)] +
                  symbol[Math.floor(Math.random()*12)];
}

let buttonClick = document.getElementById("onclickbutton");
let display = document.getElementById("mypassword");

buttonClick.onclick =  function(){
    display.value = genPassword;
}
 */

/* let input = document.getElementById("mytodolist");
let buttonOnclick = document.getElementById("onclickbutton");
let output = document.getElementById("mylist");

function toDisplay(){
    if(input.value ===''){
        window.alert("Please enter text");
    }
    else{
        output.textContent+=input.value + "\n";
    }
} */

// callback: funtion passed as an argument to function
// use to handling asynchronous operations
//  -- reading a file,
//  --netwprk req ,
//  --reading database
// .forEach() function with call back use to iterate array

/* function hello(){
    console.log("hello");
}
function goodby(callback){
    console.log("goodby");
    callback();
}
goodby(hello); */

/* function sum(callback,x,y){
    let result = x + y;
    callback(result);
}
function display(result){
    // console.log(result);
    document.getElementById("mytext").innerText = result;

}
sum(display,1,3); */

/* let myArray = [1,2,3,4,5];
let myArray2 = ["harsh","aman","vaibhav","manav"];

function display(elements){
    console.log(elements);
}

myArray.forEach(display);
myArray2.forEach(display); */

// let array = [1,2,3,4,5];
// let myArray2 = ["harsh","aman","vaibhav","manav"];

// function double(element,index,array){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }

// function display(element){
//     console.log(element);
// }
// myArray2.forEach(double);
// myArray2.forEach(display);

// array.forEach(display);
// array.forEach(double); //doubling values
// array.forEach(display);
// myArray2.forEach(capitalize);
// myArray2.forEach(display);

// function capitalize(element,index,array){
//     array[index] = element.toUpperCase();  // toLowerCase()
// }

// function double(element,index,array){
//     array[index] = element * 2;
// }

// function display(callback){
//     console.log(callback);
// }

// .map() ---- accepts calback applies to function and return new array

/* const array = [1,2,3,4,5];

let new1 = array.map(square);
let new2 = array.map((element) => {
    return Math.pow(element, 3);
})

console.log(new1);
console.log(new2);

function square(element){
    return Math.pow(element, 2);
} */

/* const array = ["harsh", "square","shivam","manav"];

let new1 = array.map(upper);
let new2 = array.map(lower);
console.log(new1);
console.log(new2);

function upper(element){
    return element.toUpperCase();
}

function lower(element){
    return element.toLowerCase();
} */

// .filter creates new array by filtering out elements

/* const array = [1,2,3,4,5,6,8,20];

let new1 = array.filter(isEven);
console.log(array);
console.log(new1);

function isEven(element){
    return element % 2 ===0;
} */

// .reduce() the lement of the array to single value

/* const price = [10,20,30,50,70];

let new1 = price.reduce(sum);
let new2 = price.reduce(getMax);

console.log(price);
console.log(new1);
console.log(new2);

function sum(acculumator,element){
    return acculumator + element;
}

function getMax(acculumator,element){
    return Math.max(acculumator,element);
} */

// function diferent expressions

/* function sayHello(){
    console.log("Hello");
}
sayHello();
 */

/* let say = function(){
    console.log("Hello");
}
say();
 */

/* let game = () => {
    console.log("Hello");
}
game(); */

// object creation

/* let object = {
    name:"harsh",
    roll_no:73,
    branch:"ECE",
    batch:2023
}
console.log(object.name);
console.log(object.roll_no);
console.log(object.branch);
console.log(object.batch);

console.log(typeof(object));
console.log(object); */

/* function student(name,roll_no,batch){
    this.name = name;
    this.roll_no = roll_no;
    this.batch = batch;
}

const harsh = new student("harsh",73,2023);

console.log(harsh.name);
console.log(harsh.roll_no);
console.log(harsh.batch); */

// class creation

/* class Student{
    constructor(name,roll_no,batch){
        this.name = name;
        this.roll_no = roll_no;
        this.batch = batch;
    }
    displayStudent(){
        console.log(`name:${this.name}`);
        console.log(`roll_no:${this.roll_no}`);
        console.log(`batch:${this.batch}`);
    }
}

const harsh = new Student("harsh",2311401273,2023);

harsh.displayStudent(); */

// date(year month day hour minute second ms )
// Mon Jun 17 2024 17:59:35 GMT+0530 (India Standard Time)

/* const date = new Date();
console.log(date);

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

console.log(`year : ${year}\nmonth : ${month}\nday : ${day}\nhour : ${hour}\nminute : ${minute}\nsecond : ${second}`);

document.getElementById("year").innerText = year;
document.getElementById("month").innerText;
document.getElementById("day").innerText = day;
// document.getElementById("hour").innerText = hour +':';
if(hour>12){
    if(hour-12>9){
    document.getElementById("hour").innerText =(hour - 12) + ':';
    }
    else{
        document.getElementById("hour").innerText ='0' + (hour - 12) + ':';
    }
}
else if(hour ===11 && hour ===12){
    document.getElementById("hour").innerText =hour + ':';
}
else{
    document.getElementById("hour").innerText ='0' + hour + ':';
}
// document.getElementById("minute").innerText = minute +':';
if(minute<10){
    document.getElementById("minute").innerText = '0' + minute + ':';
}
else{
    document.getElementById("minute").innerText = minute + ':';
}
// document.getElementById("second").innerText = second;
if(second<10){
    document.getElementById("second").innerText = '0' + second ;
}
else{
    document.getElementById("second").innerText = second;
}

switch(month){
        case 1:
            document.getElementById("month").innerText = "january";
            break;
        case 2:
            document.getElementById("month").innerText = "february";
            break;
        case 3:
            document.getElementById("month").innerText = "march";
            break;
        case 4:
            document.getElementById("month").innerText = "april";
            break;
        case 5:
            document.getElementById("month").innerText = "may";
            break;
        case 6:
            document.getElementById("month").innerText = "june";
            break;
        case 7:
            document.getElementById("month").innerText = "july";
            break;
        case 8:
            document.getElementById("month").innerText = "august";
            break;
        case 9:
            document.getElementById("month").innerText = "september";
            break;
        case 10:
            document.getElementById("month").innerText = "october";
            break;
        case 11:
            document.getElementById("month").innerText = "november";
            break;
        case 12:
            document.getElementById("month").innerText = "december";
            break;
        

} */

/* function updateClock(){
    const now = new Date();
    let hour = now.getHours().toString().padStart(2,0);
    const meridian = hour>=12? "PM":"AM";
    hour = hour % 12 ||12;
    hour = hour.toString().padStart(2,0);
    const minute = now.getMinutes().toString().padStart(2,0);
    const second = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hour}:${minute}:${second} ${meridian}`;
    document.getElementById("clock-display").innerText = timeString;
}
updateClock();
setInterval(updateClock,1000); */

const display = document.getElementById("clock");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
  }
}

function stop() {
    if(isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    startTime =0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = '00:00:00:00';
}

function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
  let second = Math.floor(elapsedTime/1000 % 60);
  let millisecond = Math.floor(elapsedTime%1000/10);
  hours = String(hours).padStart(2, '0');
  minutes = String(minutes).padStart(2, '0');
  second = String(second).padStart(2, '0');
  millisecond = String(millisecond).padStart(2, '0');
  display.textContent = `${hours}:${minutes}:${second}:${millisecond}`;
}
