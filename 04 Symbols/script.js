// SYMBOLS - NEW PRIMITIVE TYPE
// (()=>{let symbol = Symbol('debug'); // no NEW
// console.log(symbol); // [object Symbol] {...}
// console.log(symbol.toString()); // "Symbol(debug)"
// console.log(typeof symbol); // "symbol"

// let anotherSymbol = Symbol('debug');
// console.log(symbol == anotherSymbol);

// let obj = {
//   name: 'max',
//   [symbol]: 22
// }

// console.log(obj); // [object Object] { name : "max" } (no [symbol])

// console.log(obj[symbol]); // 22
// })();

// SHARED SYMBOLS

// (()=>{
//   let symbol1 = Symbol.for('age');
//   let symbol2 = Symbol.for('age');

//   console.log(symbol1 == symbol2); // true

//   let person = {
//     name: 'Max'
//   };

//   function makeAge(person) {
//     let ageSymbol = Symbol.for('age'); ageSymbol = symbol1
//     person[ageSymbol] = 27;
//   }

//   makeAge(person);

//   console.log(person[symbol1]); // 27 ( = person[ageSymbol])

// })();

// (()=>{
//   let symbol = Symbol.for('age');

//   let person = {
//     name: 'Max',
//     age: 30
//   };

//   function makeAge(person) {
//     let ageSymbol = Symbol.for('age'); ageSymbol = symbol1
//     person[ageSymbol] = 27; // ageSymbol has nothing to do with age property of person
//   }

//   makeAge(person);

//   console.log(person[symbol]); // 27
//   console.log(person["age"]); // 30

// })();

// WELL-KNOWN SYMBOLS

// (()=>{

//   class Person {

//   }

//   let person = new Person();

//   console.log(person); // [object Object] { ... }

// })();

// (() => {
//   class Person {}

//   Person.prototype[Symbol.toStringTag] = 'Person';

//   let person = new Person();

//   console.log(person); // [object Person] { ... }
// })();

// (() => {
//   class Person {}

//   let person = new Person();

//   console.log(person);            // Person {}
//   console.log(person.prototype);  // undefined
//   console.log(person.__proto__);  // > {constructor: ƒ}
//   // > constructor: class Person > __proto__: Object
// })();

// (() => {
//   let numbers = [1, 2, 3];

//   console.log(numbers + 1); // "1,2,31"
// })();

(() => {
  let numbers = [1, 2, 3];

  numbers[Symbol.toPrimitive] = function () {
    return 999;
  };

  console.log(numbers + 1); /// 1000
})();
