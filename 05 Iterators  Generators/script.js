// // ITERATOR BASICS // //

// (() => {
//   let array = [1, 2, 3];

//   console.log(typeof array[Symbol.iterator]); // function

//   let it = array[Symbol.iterator]();

//   console.log(it); // [object Array Iterator]
//   console.log(it.next()); // [object Object] { done: false, value: 1 }
//   console.log(it.next()); // [object Object] { done: false, value: 2 }
//   console.log(it.next()); // [object Object] { done: false, value: 3 }
//   console.log(it.next()); // [object Object] { done: true, value: undefined }
// })();

// // ITERATORS IN ACTION // //

// (() => {
//   let array = [1, 2, 3];

//   array[Symbol.iterator] = function() {
//     return {
//       next: function() {
//         return {
//           done: false,
//           value: 10
//         }
//       }
//     }
//   }
//   let it = array[Symbol.iterator]();

//   console.log(it.next()); // [object Object] { done: false, value: 10 }
//   console.log(it.next()); // [object Object] { done: false, value: 10 }
//   console.log(it.next()); // [object Object] { done: false, value: 10 }
//   console.log(it.next()); // [object Object] { done: false, value: 10 }
// })();

// })();

// (() => {
//   let array = [1, 2, 3];

//   array[Symbol.iterator] = function () {
//     let nextValue = 10;
//     return {
//       next: function () {
//         nextValue++;
//         return {
//           done: nextValue > 15 ? true : false,
//           value: nextValue,
//         };
//       },
//     };
//   };
//   let it = array[Symbol.iterator]();

//   for (let element of array) {
//     console.log(element); // 11 /n 12 /n 13 /n 14 /n 15
//   }
// })();

// // CREATING A CUSTOM ITERATEABLE OBJECT // //

// (() => {
//   let person = {
//     name: 'Max',
//     hobbies: ['Sports', 'Cooking'],
//     [Symbol.iterator]: function () {
//       let i = 0;
//       let hobbies = this.hobbies;
//       return {
//         next: function () {
//           let value = hobbies[i];
//           i++;
//           return {
//             done: i > hobbies.length ? true : false,
//             value: value,
//           };
//         },
//       };
//     },
//   };

//   for (let hobby of person) {
//     console.log(hobby); // "Sports" /n "Cooking"
//   }
// })();

// // GENERATORS BASICS // //

// (() => {
//   function *select() { // function* select // function * select
//     yield 'House';
//     yield 'Garage';
//   }

//   select(); //  (nothing)
//   console.log(it.next()); // [object Object] { done: false, value: "House" }
//   console.log(it.next()); // [object Object] { done: false, value: "Farage" }
//   console.log(it.next()); // [object Object] { done: true, value: undefined }
// })();

// // GENERATORS IN ACTION // //

// (() => {
//   let obj = {
//     [Symbol.iterator]: gen,
//   };

//   function* gen(end) {
//     for (let i = 0; i < end; i++) {
//       yield i;
//     }
//   }

//   let it = gen(2);
//   console.log(it.next()); // {value: 0, done: false}
//   console.log(it.next()); // {value: 1, done: false}
//   console.log(it.next()); // {value: undefined, done: true}
//   console.log(it.next()); // {value: undefined, done: true}
// })();

// // CONTROLLING ITERATORS WITH THROW AND RETURN // //

// (() => {
//   function* gen(end) {
//     for (let i = 0; i < end; i++) {
//       try {
//         yield i;
//       } catch (e) {
//         console.log(e);
//       }
//     }
//   }

//   let it = gen(2);
//   console.log(it.next()); // {value: 0, done: false}

//   // Without try-catch block start
//   // console.log(it.throw()); // "error"
//   // console.log(it.next()); // "Uncaught undefined (line ...)"
//   // console.log(it.throw('An error occured')); // "error"
//   // console.log(it.next()); // "Uncaught undefined (line ...)"
//   // Without try-catch block end

//   // console.log(it.return('An error occured')); // {done: true, value: "An error occured"}
//   console.log(it.throw('An error occured')); // "An error occured" /n {value: 1, done: false}

//   console.log(it.next()); // {value: undefined, done: true}

//   console.log(it.next()); // {value: undefined, done: true}

// })();

(() => {})();
