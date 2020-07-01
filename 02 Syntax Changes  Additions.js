// // Syntax changes

// // let & const

// // LET BLOCK SCOPE

// (() => {
//   var name = 'Max';
//   console.log(name); // "Max"
// })();

// (() => {
//   let name = 'Max1';
//   console.log(name); // "Max1"
// })();

// (() => {
//   if (true) {
//     var name = 'Max2';
//   }
//   console.log(name); // "Max2"
// })();

// (() => {
//   if (true) {
//     let name = 'Max3';
//   }
//   console.log(name); // ""
// })();

// // (() => {
// //   if (true) {
// //     let age = 27;
// //   }
// //   console.log(age); // "Uncaught ReferenceError: age is not defined"
// // })();

// (() => {
//   let age = 30;
//   if (true) {
//     let age = 27;
//     console.log(age); // 27
//   }
//   console.log(age); // 30
//   age = 29;
//   console.log(age); // 29
// })();

// // CONSTANTS WITH CONST

// (() => {
//   const AGE = 27;
//   console.log(AGE); // 27
//   // AGE = 29;
//   // console.log(AGE); // "Uncaught TypeError: Assignment to constant variable."
// })();

// (() => {
//   const AGES = [27, 29, 31];
//   console.log(AGES); // (3) [27, 29, 31]
//   AGES.push(25);
//   console.log(AGES); // (4) [27, 29, 31, 25] arrays can be changed even with const. we are not changing pointer
// })();

// (() => {
//   const OBJ = {
//     age: 27,
//   };
//   console.log(OBJ); {age: 27}
//   OBJ.age = 30;
//   console.log(OBJ); {age: 30} // objects can be changed too even with const!
// })();

// // HOISTING IN ES6;

// (() => {
//   age = 27;
//   console.log(age); // 27

//   var age; // var declaration is lower than assignment ('=')
// })();

// // (() => {
// //   age = 27;
// //   console.log(age); // "Uncaught ReferenceError: Cannot access 'age' before initialization"
// //   let age; // doesn't work like this
// // })();

// (() => {
//   let age;
//   age = 27;
//   console.log(age); // 27 (now it works as expected)
// })();

// (() => {
//   function doSmth() {
//     age = 27;
//   }
//   let age;
//   doSmth();
//   console.log(age); // 27 (because we call function doSmth() after declaration (let) of age)
// })();

// // FAT ARROW FUNCTIONS

// // basic fn declaration
// (() => {
//   function fn() {
//     console.log('Hello!');
//   }
//   fn(); // "Hello!"
// })();

// (() => {
//   var fn = () => {
//     console.log('Hello!');
//   };
//   fn(); // "Hello!"
// })();

// (() => {
//   var fn = () => console.log('Hello!'); // one line -> no need for parenthesis
//   fn(); // "Hello!"
// })();

// (() => {
//   var fn = () => 'Hello'; // if all we do is returning one line, we can skip return statement
//   // same as:
//   // function fn() {
//   //  return 'Hello'
//   // }
//   // but much more elegant
// })();

// (() => {
//   var fn = () => {
//     let a = 2;
//     let b = 3;
//     return a + b;
//   };
//   console.log(fn()); // 5
// })();

// (() => {
//   var fn = (a, b) => {
//     return a + b;
//   };
//   console.log(fn(3, 8)); // 11
// })();

// (() => {
//   var fn = (a, b) => a + b;
//   console.log(fn(3, 8)); // 11
// })();

// (() => {
//   // var fn = (a) => a + 5; // it works
//   var fn = (a) => a + 5; // it works too but is a lit bit cleaner
//   console.log(fn(3, 8)); // 8
// })();

// (() => {
//   setTimeout(() => console.log('Hello'), 1000);
// })();

// // FAT ARROW FUNCTIONS AND THE THIS KEYWORD

// (() => {
//   function fn() {
//     console.log(this); // Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
//   }
//   fn();
// })();

// (() => {
//   var fn2 = () => console.log(this);
//   fn2(); // Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
// })();

// (() => {
//   var button = document.querySelector('button');
//   var fn2 = () => console.log(this); // Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}

//   function fn() {
//     console.log(this); // HTMLElement <button>Test</button>
//   }
//   button.addEventListener('click', fn);
// })();

// // FUNCTIONS AND DEFAULT PARAMETERS

// (() => {
//   function isEqualTo(number, compare = 10) {
//     return number == compare;
//   }

//   console.log(isEqualTo(10)); // true
// })();

// (() => {
//   function isEqualTo(number = 10, compare) {
//     console.log(number); // 11
//     console.log(compare); // undefined
//     return number == compare;
//   }
//   console.log(isEqualTo(11)); // false
// })();

// (() => {
//   let a = 100;
//   function isEqualTo(number, compare = a) {
//     console.log(number); // 11
//     console.log(compare); // 100
//     return number == compare;
//   }
//   console.log(isEqualTo(11)); // false
// })();

// // something weird
// (() => {
//   function isEqualTo(number = compare, compare = 10) {
//     // "Uncaught ReferenceError: Cannot access 'compare' before initialization"
//     console.log(number);
//     console.log(compare);
//     return number == compare;
//   }
//   console.log(isEqualTo());
// })();

// (() => {
//   function isEqualTo(number = 10, compare = number) {
//     console.log(number); // 10
//     console.log(compare); // 10
//     return number == compare;
//   }
//   console.log(isEqualTo()); // true
// })();

// // OBJECT LITERAL EXTENSIONS

// (() => {
//   let obj = {
//     name: 'Max',
//     age: 27,
//   };
//   console.log(obj); // {name: "Max", age: 27}
// })();

// (() => {
//   let name = 'Anna';
//   let age = 25;

//   let obj = {
//     name,
//     age,
//   };
//   console.log(obj); // {name: "Anna", age: 25}
// })();

// (() => {
//   let name = 'Anna';
//   let age = 25;

//   let obj = {
//     name: 'Max',
//     age,
//   };
//   console.log(obj); // {name: "Max", age: 25}
// })();

// (() => {
//   let name = 'Anna';
//   let age = 25;

//   let obj = {
//     name: 'Max',
//     age,
//     greet() {
//       console.log(this.name + ', ' + this.age);
//     },
//     // "strGreet"() { // ESLint DOESN'T ALLOW ""() declaration
//     //   console.log(this.name + ', ' + this.age);
//     // },
//     'greet string'() {
//       // works fine
//       console.log(this.name + ', ' + this.age);
//     },
//   };
//   obj.greet(); // "Max, 25"
//   // obj[strGreet](); // "Max, 25" ESLint DOESN'T ALLOW ""() declaration
//   obj['greet string'](); // "Max, 25"
// })();

// (() => {
//   let name = 'Anna';
//   let age = 25;

//   let ageField = 'age';

//   let obj = {
//     name: 'Max',
//     [ageField]: 28,
//     'greet me'() {
//       console.log(this.name + ', ' + this.age);
//     },
//   };
//   console.log(obj);
//   /* console.log(obj):
//   >  {name: "Max", age: 28, greet me: ƒ}
//   >    age: 28
//   >    greet me: ƒ 'greet me'()
//   >    name: "Max"
//   >   __proto__: Object
//   */
//   obj['greet me'](); // "Max, 28"
//   console.log(obj['age']); // 28 (wow)
//   console.log(obj.age); // 28 (wow)
//   console.log(obj[ageField]); // 28 (wow)
// })();

// // THE REST OPERATOR

// (() => {
//   let numbers = [1, 2, 3, 4, 5];

//   function sumUp(toAdd) {
//     let result = 0;
//     for (let i = 0; i < toAdd.length; i++) {
//       result += toAdd[i];
//     }
//     return result;
//   }
//   console.log(sumUp(numbers)); // 15
// })();

// (() => {
//   function sumUp(...toAdd) {
//     // REST operator
//     console.log(toAdd); // Array (3) [100, 10, 20]
//     let result = 0;
//     for (let i = 0; i < toAdd.length; i++) {
//       result += toAdd[i];
//     }
//     return result;
//   }
//   console.log(sumUp(100, 10, 20)); // 130
// })();

// (() => {
//   function sumUp(...toAdd) {
//     console.log(toAdd); // Array (3) [100, 10, "20"]
//     let result = 0;
//     for (let i = 0; i < toAdd.length; i++) {
//       result += toAdd[i];
//     }
//     return result;
//   }
//   console.log(sumUp(100, 10, '20')); // "11020" (100+10, "20")
// })();

// // SPREAD OPERATOR
// // Splits an array into list of values

// (() => {
//   let numbers = [1, 2, 3, 4, 5];

//   console.log(Math.max(numbers)); // NaN
//   console.log(...numbers); // 1 2 3 4 5
//   console.log(Math.max(...numbers)); // 5 (spread operator)
// })();

// // THE FOR-OF LOOP

// (() => {
//   let testResults = [1.23, 1.1, 4.1];

//   for (let testResult of testResults) {
//     console.log(testResult); // same as for(let ...;;)
//       // > 1.23
//       // > 1.1
//       // > 4.1
//   }
// })();

// // TEMPLATE LITERALS

// (() => {
//   let name = 'Max';

//   // multi-string literal
//   let description = `
//     Hello, I'm ${name + '!!!'}
//     Use backslash to print \${name}
//   `;

//   console.log(description);
//   // >
//   // >  Hello, I'm Max!!!
//   // >  Use backslash to print ${name}
//   // >
// })();

// // DESTRUCTING - ARRAYS

// (() => {
//   let numbers = [1, 2, 3];

//   let [a, b, c, d] = numbers;

//   console.log(a); // 1
//   console.log(b); // 2
//   console.log(d); // undefined
//   console.log(numbers); // (3) [1, 2, 3]
// })();

// (() => {
//   let numbers = [1, 2, '3'];
//   let [a, ...b] = numbers;
//   console.log(b); // Array (2) [2, "3"]
// })();

// (() => {
//   let numbers = [1, 2, '3'];
//   let [a = 'Default', b, c, d = 'Default'] = numbers;
//   console.log(a); // 1 (not "Default")
//   console.log(d); // "Default"
// })();

// (() => {
//   let a = 5;
//   let b = 10;

//   [b, a] = [a, b];
//   console.log(a); // 10
//   console.log(b); // 5
// })();

// (() => {
//   let numbers = [1, 2, 3];

//   let [a, , c] = numbers;
//   console.log(a, c); // 1 3
// })();

// (() => {
//   // immediate destructuring
//   let [a, b] = [1, 2, 3];
//   console.log(a, b); // 1 2
// })();

// // DESTRUCTING - OBJECTS

// (() => {
//   let obj = {
//     name: 'Max',
//     age: 27,
//   };

//   let { name, age } = obj;

//   console.log(name, age); // Max 27
// })();

// (() => {
//   let obj = {
//     name: 'Max',
//     age: 27,
//     greet: function () {
//       console.log('Hello there!');
//     },
//   };

//   // cannot skip properties of object
//   // let { name, , greet } = obj;
//   // > Uncaught SyntaxError: Unexpected token ','

//   let { name, greet } = obj;
//   greet(); // Hello there!
// })();

// (() => {
//   // using alias for greet function
//   let obj = {
//     name: 'Max',
//     age: 27,
//     greet: function () {
//       console.log('Hello there!');
//     },
//   };

//   let { name, greet: hello } = obj;
//   hello(); // Hello there!
// })();

// // DESTRUCTING - SUMMARY

// a) you're not changing original objects or arrays
// b) you can do the same for both arrays and object,
//    but for object destructuring you pull out
//    element by original object's property name
//    and for array destructuring you're pulling out
//    the position.
