// undefined
let myVar;

console.log(myVar); // undefined

// null
let empty = null;
console.log(empty); // null -> variable is empty or unknown
console.log(typeof empty); // object, a bug but there is no problem
// if you want to say that your variable is empty

// NaN
// 1.
let strToNr = "Hello";
strToNr = Number(strToNr); // NaN

console.log(strToNr, typeof strToNr); // NaN number

// 2.
let nr1 = 2;
let nr2 = "3";
console.log(nr1 + nr2); // 23
console.log(nr1 + Number(nr2)); // 5 = > 2 + 3

// 3. Addition
let number1 = "Hello ";
let number2 = "World";
let result = number1 + number2; //
console.log(result);

// 4. subtraction
let nr3 = 20;
let nr4 = 4;
let str2 = "Hi";
let nr5 = 5;
let result2 = nr3 - nr4; // 16
let result3 = str2 - nr5; // NaN
console.log(result2, result3); // 16 NaN

// 5.Multiplication
let number7 = 15;
let string3 = "DCI";
let result8 = number7 * string3; // 15 * DCI
console.log(result8); // NaN

// 7.Expo
let number9 = 2;
let number10 = 3;
let result11 = number9 ** number10;
console.log(result11); // 2³ => 2*2*2 = 8

// Modulus
let myNum1 = 8;
let myNum2 = 2;
let myResult1 = myNum1 % myNum2;
console.log(`${myNum1} % ${myNum2} = ${myResult1}`); // 8 % 2 = 0

//
let myString = "Insgesamt: ";
let myNum3 = 10;
let result20 = myString + myNum3;
console.log(typeof result20); // Insgesamt: 10

// Integer vs float (number)
// Integer without decimal point .
// 20 is Integer but 3.4 is float

// Converting strings into numbers => parseInt(), parseFloat()
let myNum7 = "12";
myNum7 = Number(myNum7);
console.log(myNum7, typeof myNum7); // 12 number

const var1 = null;
console.log(Number(var1)); // 0

// Number() vs parseInt()
console.log(parseInt("146Fuchs3")); // 146
console.log(Number("146Fuchs")); // NaN

//
let myAge = parseInt("32,67");
console.log(myAge); // 32

//
let myAge1 = parseInt("0999"); // NaN
let myAge2 = Number("1a2"); // NaN
console.log(myAge1, myAge2);
//
// parseFloat()
let num1 = parseFloat("1234abc"); // 1234
let num2 = parseFloat("22.5"); // 22.5
let num3 = parseFloat("0908"); // 908
let num4 = parseFloat("123.4blue"); // 123.4
console.log(num4);

// max min
console.log(Math.max(15, 8)); // 15
console.log(Math.min(15, "Hi")); // NaN
console.log(Math.max(15, "hi24")); // NaN
console.log(Math.min(10, "7")); //  7

//
console.log(isNaN(40)); // 40 is NaN = > false
console.log(isNaN(100 - 50)); // false
console.log(isNaN(-4.13)); // false
console.log(isNaN(0)); // false

console.log(isNaN("45")); // false
console.log(isNaN("My name is ")); // truectrl + f
// ctrl + d
// ctrl + shift + arrow keys
console.log(isNaN(true)); // false
console.log(isNaN(undefined)); // true
console.log(isNaN(null)); // false => is null NaN
console.log(isNaN(NaN)); // true => is NaN is NaN

console.log(NaN === NaN); // false, NaN are unique

console.log(typeof NaN); // number

console.log(undefined + 5); // NaN
console.log(null + 5); // 0 + 5 = 5

console.log(undefined + undefined); // NaN
//
console.log(+true + +"12"); // 112
console.log(+false); // 0
console.log(+"Hallo"); // NaN

// ctrl + f
// ctrl + d
// ctrl + shift + arrow keys

// Random number
// 1 bis 10
// Math.floor(Math.random() * (max - min + 1)) + min;

let x = 5;
let y = "5";
console.log(x === y); // false

const arr = ["Hi there", "How are you"]; // [0]
arr[0] = "new value";
console.log(arr);

// arr = ["I am fine", "Thank u"]; // Error
console.log("*******************");
// spread operator
let spread = ["the", "best", "language"];
let message = ["JavaScript", "is", ...spread, "and", "very", "good"]; // JavaScript is the best language
console.log(message);

function addNums(x, y) {
  console.log(x + y);
}
// Call oder invoke
let arr2 = [10, 20];
addNums(...arr2);

function addFiveNumbers(x, y, a, z, k) {
  console.log(x + y + a + z + k);
  // null + 4 = 4
}
let array1 = [1, 2];
let array2 = [6, 8];

addFiveNumbers(...array1, ...array2); // addFiveNumber(1,2,6,8,3);

const num10 = [1, 2, 3];
const num11 = [...num10];
console.log(num11);

let exp = [0, 1, 2];
let exp1 = [3, 4, 5]; // concat
let resulttt = exp.concat(exp1); //[0,1,2,3,4,5]
let sum = [...exp, ...exp1];
console.log(sum);

let a = [3, 6, 9];
let b = "Hello";
console.log(a.concat(b)); // [3,6,9, "Hello"]
console.log(...a, ...b); //[3,6,9,"h","e",......]

// spread in objects

const obj1 = {
  fName: "Thomas",
  age: 33,
};

const obj2 = {
  lName: "Müller",
  played: 500,
};

const myObj = { ...obj1, ...obj2 };
console.log(myObj);

//
const number20 = [1, 3, 5];
const combined = [2, ...number20, 4, 1]; // [2,4,1,1,3,5]
console.log(combined);

//
let aaa = ["A", ..."IMAN", "B"];
console.log(aaa); // ["A", "I",.... "B"]

// Rest params: in function

function test(param1, ...param2) {
  console.log(param1, param2);
}
// Call Invoke
test("Hi", "There", "How r u", "tnx");

//
function test2(a, b, c, ...args) {
  console.log(args);
}
// call or invoke
test2(1, 2, 3, 4, 5, 6, 7, 8); // 4,5,6,7,8

//
function myfunc(a, y, ...other) {
  return other;
}

console.log(myfunc("Iman", "Ghanei", "Cologne", "Persia")); // Cologne Persia

// dot and bracket notation
let obj3 = {
  cat: "Mira",
  dog: "Susi",
};
// dot notation
// let name1 = obj3.cat;
// bracket notation
let name1 = obj3["dog"];

console.log(name1);

let arr100 = ["a", "b", "c"];
let m = arr100[1];
console.log(m);

let animals = {
  lion: {
    color: "Yellow",
    size: "Big",
  },
  cat: {
    color: "Black",
    size: "Small",
  },
};
console.log(animals.cat.color);
console.log(animals.lion["size"]);

function myFunc2(animal) {
  // console.log(animals.animal);
  console.log(animals[animal]);
}
myFunc2("lion");

let animals2 = [
  {
    lion: {
      color: "Yellow",
      size: "Big",
    },
    cat: {
      color: "Black",
      size: "Small",
    },
  },
];
console.log(animals2[0].lion.size);

//

let book = {
  "Book is": "JS",
  author: {
    fName: "Alex",
    lName: "David",
  },
};
console.log(book);
console.log(book["Book is"]);

let names10 = ["Max", "Maximilian", "Kesban", "Nelly", "Said"];
for (let i = 0; i < names10.length; i++) {
  console.log(`Hello ${names10[i]}`);
  names10[i] = "Hello " + names10[i];
}
console.log(names10);

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
