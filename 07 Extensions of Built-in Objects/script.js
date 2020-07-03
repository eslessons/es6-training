/// EXTENSIONS OF BUILT-IN OBJECTS ///

// THE OBJECT //

(() => {
  // var obj1 = {
  //   a: 1,
  // };
  // var obj2 = {
  //   b: 2,
  // };
  // var obj = Object.assign(obj1, obj2);
  // console.log(obj) // [object Object] { a: 1, b: 2 }
})();

(() => {
  // class Obj1 {
  //   constructor() {
  //     this.a = 1;
  //   }
  // }
  // class Obj2 {
  //   constructor() {
  //     this.b = 2;
  //   }
  // }
  // var obj1 = new Obj1();
  // var obj2 = new Obj2();
  // var obj = Object.assign(obj1, obj2); // the first obj will be prototyp etc.
  // console.log(obj); // Obj1 {a: 1, b: 2}
  // console.log(obj.__proto__); //
  // // {constructor: ƒ}
  // //   constructor: class Obj1
  // //   __proto__: Object
  // console.log(obj.__proto__ === Obj1.prototype); // true
  // console.log(obj.__proto__ === Obj2.prototype); // false
  // console.log(obj.__proto__ === Object.prototype); //false
  // console.log(obj instanceof Obj1); // true
  // console.log(obj instanceof Obj2); // false
})();

(() => {
  // class Obj1 {
  //   constructor() {
  //     this.a = 1;
  //   }
  // }
  // class Obj2 {
  //   constructor() {
  //     this.b = 2;
  //   }
  // }
  // var obj1 = new Obj1();
  // var obj2 = new Obj2();
  // var obj = Object.assign({}, obj1, obj2); // the first obj will be prototyp etc.
  // console.log(obj); // Obj1 {a: 1, b: 2}
  // console.log(obj.__proto__ === Obj1.prototype); // false
  // console.log(obj.__proto__ === Obj2.prototype); // false
  // console.log(obj.__proto__ === Object.prototype); // true
})();

(() => {
  // let person = {
  //   name: 'Max',
  // };
  // let boss = {
  //   name: 'Anna',
  // };
  // console.log(person.__proto__ === Object.prototype);
  // Object.setPrototypeOf(person, boss);
  // console.log(person.__proto__ === Object.prototype); // false
  // console.log(person.__proto__ === boss); // true
  // console.log(person.name); // "Max" or "Anna" if person.name doesn't exist
})();

// THE MATH OBJECT //

(() => {
  // let number = -10;
  // console.log(Math.sign(number)); // "-1"
  // let numberPositive = 10;
  // console.log(Math.sign(numberPositive)); // "1"
  // let numberZero = 0;
  // console.log(Math.sign(numberZero)); // "0"
  // let numberNaN = NaN;
  // console.log(Math.sign(numberNaN)); // NaN
  // let numberString = 'a string';
  // console.log(Math.sign(numberString)); // NaN
})();

(() => {
  // let numberZero = 0.78;
  // console.log(Math.trunc(numberZero)); // "0"
  // let numberThree = 3.78;
  // console.log(Math.trunc(numberThree)); // "3"
  // let numberMinusThree = -3.78;
  // console.log(Math.floor(numberMinusThree)); // "-4"
  // console.log(Math.trunc(numberMinusThree)); // "-3"
})();

// STRINGS //

(() => {
  // let name = 'Maximilian';
  // // (case sensitive)
  // console.log(name.startsWith('Max')); // true
  // console.log(name.startsWith('Maxx')); // false
  // // (case sensitive)
  // console.log(name.endsWith('an')); // true
  // console.log(name.endsWith('AN')); // false
  // // (case sensitive)
  // console.log(name.includes('imi')); // true
})();

// THE NUMBER OBJECT //

(() => {
  // let number = NaN;
  // console.log(isNaN(number)); // true
  // // now added to Number object
  // console.log(Number.isNaN(number)); // true
  // let bigNumber = 1000000000000;
  // console.log(isFinite(bigNumber)); // true
  // let infinity = Infinity;
  // console.log(Number.isInteger(infinity)); // false
  // console.log(!Number.isFinite(infinity)); // true
  // let ten = 10;
  // console.log(Number.isInteger(ten)); // true
  // let tenOne = 10.1;
  // console.log(!Number.isInteger(tenOne)); // true
})();

// ARRAYS 12 //

(() => {
  // let array = Array(5);
  // console.log(array); // [undefined, undefined, undefined, undefined, undefined]
  // let arrayOF = Array.of(5, 10, 11);
  // console.log(arrayOF); // [5, 10, 11]
})();

(() => {
  // let array = [10, 12, 16];
  // console.log(array); // (3) [10, 12, 16]
  // let newArray = Array.from(array, (val) => val * 2);
  // console.log(newArray); // (3) [20, 24, 32]
})();

(() => {
  // let array = [10, 12, 16, 20, 24];
  // array.fill(100, 1, 3);
  // console.log(array); // (3) [10, 100, 100, 20, 24]
})();

(() => {
  // let array = [10, 12, 16];
  // console.log(array.find((val) => val > 12)); // returns the first element sattisfying the condition
})();

(() => {
  // var inventory = [
  //   { name: 'apples', quantity: 2 },
  //   { name: 'bananas', quantity: 0 },
  //   { name: 'cherries', quantity: 5 },
  // ];
  // function findCherries(fruit) {
  //   return fruit.name === 'cherries';
  // }
  // console.log(inventory.find(findCherries)); // {name: "cherries", quantity: 5}
})();

// ARRAY 22 //

(() => {
  // let array = [1, 2, 3];
  // console.log(array.copyWithin(1, 2)); // (3) [1, 3, 3]
  // console.log(array); // (3) [1, 3, 3]
})();

(() => {
  // let array = [1, 2, 3];
  // console.log(array.copyWithin(1, 0, 2)); // (3) [1, 1, 2]
})();

(() => {
  // let array = [1, 2, 3];
  // console.log(array.entries()); // Array Iterator {}
  // let it = array.entries();
  // for (let element of it) {
  //   console.log(element);
  //     // (2) [0, 1] // index: 0, value: 1
  //     // (2) [1, 2] // index: 1, value: 2
  //     // (2) [2, 3] // index: 2, value: 3
  // }
})();

(() => {})();
