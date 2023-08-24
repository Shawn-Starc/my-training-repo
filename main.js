console.log('Hello World');

/** Inbuilt Data Types **/

// Number
var number = 10;
var newNumber = number;
console.log(number);

newNumber = 20;

console.log(number);
console.log(newNumber);

// Float
var floatingNumber = 2.56;
console.log(floatingNumber)

// string
var strVariable = 'Hello World';
var strVariable2= "Hello World Again";
console.log(strVariable)
console.log(strVariable2)

// Date
var date = new Date();

var dateInString = '03/11/2012';
var customDate = new Date(dateInString);

console.log(date);
console.log(customDate);

// undefined;
//- undefined is not null

var a;
console.log(a);

//null;

var b = null;
console.log(b);

b = undefined;
console.log(b);
/** Variable Valuer Updation **/

dateInString = 10;
console.log(dateInString);


/** User Data Types **/

// Object
//-- Sabkutch Object hai;
//-- key: value;

var obj = { };  //Empty Object;
console.log(obj);

obj = { 
    age: 10,
    name: 'ishaan'
}
console.log(obj);

console.log(obj.name);      // Direct accessing
console.log(obj['age']);    // By key name as string

var getValue = function(key){
    return obj[key];
}

console.log(getValue('age'));
console.log(getValue('name'));

//-- Adding in objects;

obj.height = 124;
obj['weight'] = 56;

console.log(obj);

// Objects are always passed as reference;

var newHuman = obj;

newHuman.steps = 1000;

console.log(obj);
console.log(newHuman);

var obj1 = {
    a :4,
    b: 6
}

var obj2 = {
    c: 9,
    d: 10
}


var obj3 = {
    e: 5,
    f: 6
}

obj1.g = obj3;
obj2.h = obj1;
obj3.i = obj2;

console.log(obj1);


/** User Data Types - Array **/

var myArray = [];

myArray= [1, "ishaan", [2, 3], {a:1, b:4}, 0];

console.log(myArray);
console.log(myArray[2]);

