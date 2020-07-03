/// MAPS  SETS ///

// ES5 has Arrays and Objects
// v v v v v v v v v v v v v
// ES6 has also Maps and Sets

// MAPS- CREATION ADDING ITEMS

(() => {
  // let cardAce = {
  //   name: 'Ace of Spades',
  // };
  // let cardKing = {
  //   name: 'King of Clubs',
  // };
  // let deck = new Map();
  // deck.set('as', cardAce);
  // deck.set('kc', cardKing);
  // console.log(deck);
  // // > Map(2) {"as" => {…}, "kc" => {…}}
  // //    [[Entries]]
  // //      0: {"as" => Object}
  // //      1: {"kc" => Object}
  // //    size: 2
  // //    __proto__: Map
})();

// MAPS - MANAGING ITEMS

(() => {
  // let cardAce = {
  //   name: 'Ace of Spades',
  // };
  // let cardKing = {
  //   name: 'King of Clubs',
  // };
  // let deck = new Map();
  // deck.set('as', cardAce);
  // deck.set('kc', cardKing);
  // console.log(deck.size); // 2
  // deck.set('as', cardAce);
  // console.log(deck.size); // 2
  // console.log(deck.get('as')); // {name: "Ace of Spades"}
  // deck.delete('as');
  // console.log(deck.get('as')); // "undefined"
  // deck.clear();
  // console.log(deck);
  //  //
  //  // > Map(0) {}
  //  //    [[Entries]]
  //  //      No properties
  //  //    size: 0
  //  //    __proto__: Map
  //  //
})();

(() => {
  // let cardAce = {
  //   name: 'Ace of Spades',
  // };
  // let cardKing = {
  //   name: 'King of Clubs',
  // };
  // let deck = new Map();
  // deck.set('as', cardAce);
  // deck.set('kc', cardKing);
  // // console.log(deck.keys());
  // /*
  // MapIterator {"as", "kc"}
  //   [[Entries]]
  //     0: "as"
  //     1: "kc"
  //   __proto__: Map Iterator
  //   [[IteratorHasMore]]: true
  //   [[IteratorIndex]]: 0
  //   [[IteratorKind]]: "keys"
  // */
  // // for (key of deck.keys()) {
  // //   console.log(key);
  // //   // "as"
  // //   // "kc"
  // // }
  // for (value of deck.values()) {
  //   console.log(value);
  //   // {name: "Ace of Spades"}
  //   // {name: "King of Clubs"}
  // }
  // for (entry of deck) { // same as (entry of deck.entries())
  //   console.log(entry);
  //   // (2) ["as", {name: "Ace of Spades"}]
  //   // (2) ["kc", {name: "King of Clubs"}]
  // }
})();

// THE WeakMap //
// (Holds weak references to the entries) //

(() => {
  // let cardAce = {
  //   name: 'Ace of Spades',
  // };
  // let cardKing = {
  //   name: 'King of Clubs',
  // };
  // let key1 = { a: 1 };
  // let key2 = { b: 2 };
  // let deck = new WeakMap();
  // deck.set(key1, cardAce);
  // deck.set(key2, cardKing);
  // console.log(deck);
  // // WeakMap {{…} => {…}, {…} => {…}}
  // //  [[Entries]]
  // //    0: {Object => Object}
  // //      key: {a: 1}
  // //      value: {name: "Ace of Spades"}
  // //    1: {Object => Object}
  // //  __proto__: WeakMap
  // console.log(deck.get(key1)); // {name: "Ace of Spades"}
})();

// SETS - CREATION AND ADDING ITEMS //

(() => {
  // let array = [1, 1, 1];
  // let set = new Set([1, 1, 1, 2, 2]);
  // set.add(2);
  // set.add(3);
  // for (element of set) {
  //   console.log(element); // 1 /n 2 /n 3
  // }
})();

(() => {
  // let set = new Set([1, 1, 1]);
  // set.add(2);
  // console.log(set.has(1)); // true
  // set.delete(1);
  // for (element of set) {
  //   console.log(element); // 2
  // }
  // set.clear();
  // console.log(set); // Set(0) {}
})();

(() => {
  // let set = new Set([1, 1, 1]);
  // set.add(2);
  // for (element of set.entries()) {
  //   console.log(element);
  //   // (2) [1, 1]
  //   // (2) [2, 2]
  // }
  // for (e of set.keys()) {
  //   console.log(e);
  //   // "1"
  //   // "2"
  // }
  // for (e of set.values()) {
  //   console.log(e);
  //   // "1"
  //   // "2"
  // }
})();

// THE WEAK SET //

(() => {
  // let set = new WeakSet([{ a: 1 }, { b: 2 }, { b: 2 }]);
  // // Like WeakMap, WeakSet is not enumerable
  // // for (element of set) {
  // //   console.log(element); // Uncaught TypeError: set is not iterable ...
  // // }
  // // every {b:2} are different objects
  // console.log(set.has({ b: 2 })); // false
})();

(() => {
  let obj1 = { a: 1 };
  let obj2 = { b: 2 };
  let set = new WeakSet([obj1, obj2, obj2]);

  console.log(set.has(obj2));
})();

(() => {})();
