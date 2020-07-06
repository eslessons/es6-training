/// THE REFLECT API ///

// Basically gives us tools to evaluate our code in runtime
// Reflect API is kind of common repository

// CREATING OBJECTS WITH Reflect.construct()

(() => {
  // class Person {
  //   constructor(name) {
  //     this.name = name;
  //   }
  // }
  // // Same as let person = new Person('Max');
  // let person = Reflect.construct(Person, ['Max']);
  // console.log(person); // Person {name: "Max"}
  // console.log(person instanceof Person); // true
})();

(() => {
  // class Person {
  //   constructor(name) {
  //     this.name = name;
  //   }
  // }
  // function TopObj() {
  //   this.age = 27;
  // }
  // let person = Reflect.construct(Person, ['Max'], TopObj);
  // console.log(person.__proto__);
  // // {constructor: ƒ}
  // //   constructor: ƒ TopObj()
  // //   __proto__: Object
  // console.log(person.__proto__ == Person.prototype); // false
})();

// CALLING FUNCTIONS WITH Reflect.apply

(() => {
  // class Person {
  //   constructor(name, age) {
  //     this.name = name;
  //     this.age = age;
  //   }
  //   greet() {
  //     console.log('Hello, I am ' + this.name);
  //   }
  // }
  // // Refect analogue of "let person = new Person('Max', 27)"
  // let person = Reflect.construct(Person, ['Max', 27]);
  // // Reflect version of person.greet() with bind() to person
  // Reflect.apply(person.greet, person, []); // "Hello, I am Max"
  // Reflect.apply(person.greet, {}, []); // Hello, I am undefined
  // Reflect.apply(person.greet, { name: 'Anna' }, []); // Hello, I am Anna
})();

(() => {
  // class Person {
  //   constructor(name, age) {
  //     this.name = name;
  //     this.age = age;
  //   }
  //   greet(prefix) {
  //     console.log(prefix + 'Hello, I am ' + this.name);
  //   }
  // }
  // let person = Reflect.construct(Person, ['Max', 27]);
  // Reflect.apply(person.greet, { name: 'Anna' }, ['...']);
  // // > "...Hello, I am Anna"
})();

// REFLECT AND PROTOTYPES //

(() => {
  // class Person {
  //   constructor() {
  //     this.name = 'Max';
  //   }
  // }
  // let person = new Person();
  // // Preferable way to access Prototype
  // console.log(Reflect.getPrototypeOf(person));
  // // v {constructor: ƒ}
  // //   v constructor: class Person
  // //        arguments: (...)
  // //        caller: (...)
  // //       length: 0
  // //       name: "Person"
  // //      > prototype: {constructor: ƒ}
  // //      > __proto__: ƒ ()
  // //       [[FunctionLocation]]: script.js:79
  // //       [[Scopes]]: Scopes[1]
  // //   > __proto__: Object
  // console.log(Reflect.getPrototypeOf(person) === Person.prototype); // true
})();

(() => {
  //   class Person {
  //     constructor() {
  //       this.name = 'Max';
  //     }
  //   }
  //   let person = new Person();
  //   Person.prototype.age = 27;
  //   // Preferable way to access Prototype
  //   console.log(Reflect.getPrototypeOf(person)); // {age: 27, constructor: ƒ}
  // })();
  // (() => {
  //   class Person {
  //     constructor() {
  //       this.name = 'Max';
  //     }
  //   }
  //   let person = new Person();
  //   Person.prototype.age = 27;
  //   let proto = {
  //     age: 30,
  //   };
  //   Reflect.setPrototypeOf(person, proto);
  //   console.log(Reflect.getPrototypeOf(person));
  //   // Without setPrototypeOf -> {age: 27, constructor: ƒ}
  //   // With setPrototypeOf -> {age: 30}
})();

(() => {
  // class Person {
  //   constructor() {
  //     this.name = 'Max';
  //   }
  // }
  // let person = new Person();
  // Person.prototype.age = 27;
  // let proto = {
  //   age: 30,
  //   greet() {
  //     console.log('Hello!');
  //   },
  // };
  // Reflect.setPrototypeOf(person, proto);
  // console.log(Reflect.getPrototypeOf(person));
  // // v {age: 30, greet: ƒ}
  // //     age: 30
  // //    > greet: ƒ greet()
  // //    > __proto__: Object
  // // Person class doesn't have greet function but proto has
  // Reflect.apply(person.greet, null, []); // Hello!
})();

// ACCESSING PROPERTIES WITH REFLECT //

(() => {
  // class Person {
  //   constructor(name, age) {
  //     (this.name = name), (this.age = age);
  //   }
  // }
  // let person = new Person('Max', 27);
  // // Another way of using console.log(person.name)
  // // Perfect for using in dynamic environment
  // console.log(Reflect.get(person, 'name')); // Max
})();

(() => {
  // class Person {
  //   constructor(name, age) {
  //     (this._name = name), (this.age = age);
  //   }
  //   get name() {
  //     return this._name;
  //   }
  // }
  // let person = new Person('Max', 27);
  // console.log(Reflect.get(person, 'name')); // Max
})();

(() => {
  // class Person {
  //   constructor(name, age) {
  //     (this.name = name), (this.age = age);
  //   }
  // }
  // let person = new Person('Max', 27);
  // Reflect.set(person, 'name', 'Anna');
  // console.log(Reflect.get(person, 'name')); // Anna
})();

(() => {
  // class Person {
  //   constructor(name, age) {
  //     this.name = name;
  //     this.age = age;
  //   }
  // }
  // let mum = {
  //   name: 'Mum',
  // };
  // let person = new Person('Max', 27);
  // Reflect.set(person, 'name', 'Anna');
  // // get(target, propery to get, receiver)
  // console.log(Reflect.get(person, 'name', mum)); // Anna
})();

(() => {
  // class Person {
  //   constructor(name, age) {
  //     this._name = name;
  //     this.age = age;
  //   }
  //   get name() {
  //     return this._name;
  //   }
  // }
  // let mum = {
  //   _name: 'Mum',
  // };
  // let person = new Person('Max', 27);
  // Reflect.set(person, 'name', 'Anna');
  // // get(target, propery to get, receiver)
  // console.log(Reflect.get(person, 'name', mum)); // Mum
})();

(() => {
  // class Person {
  //   constructor(name, age) {
  //     this._name = name;
  //     this.age = age;
  //   }
  //   get name() {
  //     return this._name;
  //   }
  //   set name(value) {
  //     this._name = value;
  //   }
  // }
  // let mum = {
  //   _name: 'Mum',
  // };
  // let person = new Person('Max', 27);
  // console.log(person); // Person {_name: "Max", age: 27}
  // console.log(mum); // {_name: "Mum"}
  // Reflect.set(person, 'name', 'Anna', mum);
  // console.log(person); // Person {_name: "Max", age: 27}
  // console.log(mum); // {_name: "Anna"}
  // // get(target, propery to get, receiver)
  // console.log(Reflect.get(person, 'name', mum)); // Anna
  // console.log(Reflect.has(person, 'name')); // true
})();

// ANALYZING OBJECTS WITH Reflect.ownKeys //

(() => {
  // class Person {
  //   constructor(name, age) {
  //     this._name = name;
  //     this.age = age;
  //   }
  //   get name() {
  //     return this._name;
  //   }
  //   set name(value) {
  //     this._name = value;
  //   }
  // }
  // let person = new Person('Max', 27);
  // console.log(Reflect.ownKeys(person));
  // // > (2) ["_name", "age"]
})();

// CREATING  DELETING PROPERTIES WITH REFLECT //

(() => {
  // // Same as Object.defineProperty();
  // class Person {
  //   constructor(name, age) {
  //     this._name = name;
  //     this.age = age;
  //   }
  //   get name() {
  //     return this._name;
  //   }
  //   set name(value) {
  //     this._name = value;
  //   }
  // }
  // let person = new Person('Max', 27);
  // Reflect.defineProperty(person, 'hobbies', {
  //   writable: true, // may be false
  //   value: ['Sports', 'Cooking'],
  //   configurable: true, // allows to change property after creating. default value = false
  // });
  // console.log(person.hobbies);
  // // > (2) ["Sports", "Cooking"]
  // person.hobbies = ['Nothing'];
  // console.log(person.hobbies);
  // // ["Nothing"]
  // // if writable: false, then:
  // // > (2) ["Sports", "Cooking"]
  // // delete person.age;
  // // console.log(person.age); // undefined
  // Reflect.deleteProperty(person, 'age');
  // console.log(person.age); // undefined
})();

// PREVENTING OBJECT EXTENSIONS //

(() => {
  // class Person {
  //   constructor(name, age) {
  //     this._name = name;
  //     this.age = age;
  //   }
  //   get name() {
  //     return this._name;
  //   }
  //   set name(value) {
  //     this._name = value;
  //   }
  // }
  // let person = new Person('Max', 27);
  // console.log(Reflect.isExtensible(person)); // true
  // Reflect.preventExtensions(person);
  // // vvv
  // console.log(Reflect.isExtensible(person));
  // // false (not Extensible)
  // // vvv
  // Reflect.defineProperty(person, 'hobbies', {
  //   value: ['Sports', 'Cooking'],
  // });
  // // vvv
  // console.log(person.hobbies);
  // // >  undefined
})();
