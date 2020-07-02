/////////////////////////////

// import { keyValue as key, test } from 'external.js';
// console.log(key); // 1000
// test(); // "tested!"
// console.log(key); // 2000

/////////////////////////////

// import whatever from 'external.js';
// console.log(whatever); // "tested!"

/////////////////////////////

// import * as imported from 'external.js'; // import everything (*)
// console.log(imported);
// > o {keyValue: 1000}
// > keyValue: 1000
// > test: function test()
// > __proto__: Object
// console.log(imported.keyValue); // 1000
// imported.test(); // "tested"
// console.log(imported.keyValue); // 2000

/////////////////////////////

// import a, {keyValue as key, test} from 'external.js'; // default 'a'

// console.log(key); // 1000
// test();           // tested!
// console.log(key); // 2000
// console.log(a);   // Some text

/////////////////////////////
// CLASS BASICS
/////////////////////////////

// function Person() {

// }
// var person = new Person(); // create new Person

/////////////////////////////

// class Person {
// }
// let person = new Person();
// console.log(person); // [object Object] {...}

/////////////////////////////

// class Person {
//   constructor() {
//     this.name = 'Max';
//   }
//   greet() {
//     console.log('Hello, my name is '+this.name);
//   }
// }
// let person = new Person();
// person.greet(); // "Hello!, my name is Max"

/////////////////////////////

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     console.log('Hello, my name is '+this.name);
//   }
// }
// let person = new Person('Max');
// person.greet(); // "Hello!, my name is Max"

/////////////////////////////
// CLASSES PROTOTYPES
/////////////////////////////

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     console.log('Hello, my name is '+this.name);
//   }
// }
// let person = new Person('Max');

// console.log(person.__proto__); // [object Object] {...}
// console.log(person.__proto__ == Object.prototype); // false
// console.log(person.__proto__ == Object);
// console.log(person.__proto__ == Person.prototype); // true

/////////////////////////////
// INHERITANCE
/////////////////////////////

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     console.log('Hello, my name is '+this.name);
//   }
// }

// class Max extends Person {

// }

// let max = new Max('Max');
// max.greet(); // "Hello, my name is Max"

/////////////////////////////

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     console.log('Hello, my name is '+this.name, ' and I am ' + this.age); // "this is not defined at Max..."
//   }
// }

// class Max extends Person {
//   constructor(age) {
//     this.age = age;
//   }
// }

// let max = new Max('Max');
// max.greet(); // "this is not defined at Max..."

/////////////////////////////

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     console.log('Hello, my name is '+this.name, ' and I am ' + this.age);
//   }
// }

// class Max extends Person {
//   constructor(age) {
//     super('Max'); // always add the parent's constructor if you create one in child's class. Else you can ignore it.
//     this.age = age;
//   }
// }

// let max = new Max('Max');
// max.greet(); // "Hello, my name is Max and I am 27"

/////////////////////////////

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     console.log('Hello, my name is '+this.name, ' and I am ' + this.age);
//   }
// }

// class Max extends Person {
//   constructor(age) {
//     super('Max'); // always add the parent's constructor if you create one in child's class. Else you can ignore it.
//     this.age = age;
//   }

//   greetTwice() {
//     this.greet(); // "Hello, my name is Max and I am 27"
//     super.greet(); // "Hello, my name is Max and I am 27"
//   }
// }

// let max = new Max('Max');
// max.greetTwice();

/////////////////////////////

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     console.log('Hello, my name is '+this.name, ' and I am ' + this.age);
//   }
// }

// class Max extends Person {
//   constructor(age) {
//     super('Max'); // always add the parent's constructor if you create one in child's class. Else you can ignore it.
//     this.age = age;
//   }

//   greet() {
//     console.log('Hello!');
//   }

//   greetTwice() {
//     this.greet(); // "Hello!"
//     super.greet(); // "Hello, my name is Max and I am 27"
//   }
// }

// let max = new Max('Max');
// max.greetTwice();

/////////////////////////////
// INHERITANCE  PROTOTYPES
/////////////////////////////

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     console.log('Hello, my name is ' + this.name, ' and I am ' + this.age);
//   }
// }

// class Max extends Person {
//   constructor(age) {
//     super('Max'); // always add the parent's constructor if you create one in child's class. Else you can ignore it.
//     this.age = age;
//   }

//   greet() {
//     console.log('Hello!');
//   }

//   greetTwice() {
//     this.greet();
//     super.greet();
//   }
// }

// let max = new Max('Max');

// console.log(max.__proto__ == Max.prototype); // true
// console.log(max.__proto__ == Person.prototype); // false
// console.log(max.__proto__ == Person); // false

/////////////////////////////
// STATIC METHODS
/////////////////////////////

// class Helper {
//   logTwice(message) {
//     console.log(message);
//     console.log(message);
//   }
// }

// let helper = new Helper();
// helper.logTwice('Logged!'); // > "Logged!" > "Logged!"
// Helper.logTwice('Logged!'); // Helper.logTwice is not a function at ...

/////////////////////////////

// class Helper {
//   static logTwice(message) {
//     console.log(message);
//     console.log(message);
//   }
// }

// let helper = new Helper();
// Helper.logTwice('Logged!');  // > "Logged!" > "Logged!"

/////////////////////////////
// CLASSES  MODULES
/////////////////////////////

// export class Helper {  // EXPORT CLASS as MODULE
//   static logTwice(message) {
//     console.log(message);
//     console.log(message);
//   }
// }

// let helper = new Helper();
// Helper.logTwice('Logged!');  // > "Logged!" > "Logged!"

/////////////////////////////
// GETTERS  SETTERS
/////////////////////////////

// class Person {
//   constructor(name) {
//     this._name = name;
//   }

//   get name() {
//     return this._name.toUpperCase();
//   }

//   set name(value) {
//     if (value.length > 2) {
//       this._name = value;
//     } else {
//       console.log('Name is too short!');
//     }
//   }
// }

// let person = new Person('max');
// console.log(person);
// // > Person {_name: "max"}
// // >  _name: "max" // result from constructor
// // >  name: "MAX" // result from get name() func
// // >  __proto__: Object

// person.name = 'ax'; // "Name is too short!"

// person.name = 'Anna';

// console.log(person);
// // > Person {_name: "Anna"}
// // >  _name: "Anna" // result from constructor
// // >  name: "ANNA" // result from get name() func
// // >  __proto__: Object

/////////////////////////////

// class Person {
//   constructor(name) {
//     this._name = name;
//   }

//   // CLASS PERSON WITHOUT NAME GETTER (get name(){ ... })

//   set name(value) {
//     if (value.length > 2) {
//       this._name = value;
//     } else {
//       console.log('Name is too short!');
//     }
//   }
// }

// let person = new Person('max');
// console.log(person);
// // > Person {_name: "max"}
// // > _name: "Anna" // or  "Max"
// // > __proto__: Object
// console.log(person.name); // undefined
// console.log(person._name); // "max"

// person.name = 'Max'; // "Name is too short!"

// person.name = 'Anna';

// console.log(person);
// // > Person {_name: "Anna"}
// // >  _name: "Anna" // result from constructor
// // >  __proto__: Object
// console.log(person.name); // undefined
// console.log(person._name); // "Anna"

/////////////////////////////
// EXTENDING BUILT-IN OBJECTS
/////////////////////////////

class ConvertableArray extends Array {
  convert() {
    let returnArray = [];
    this.forEach((value) => returnArray.push('Converted!' + value));
    return returnArray;
  }
}

let numberArray = new ConvertableArray();
numberArray.push(1);
numberArray.push(2);
numberArray.push(3);

console.log(numberArray.convert()); // (3) ["Converted!1", "Converted!2", "Converted!3"]
