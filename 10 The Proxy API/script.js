/// PROXY API ///

// BASICS //

/*                                                     *
 *                     PROXY USAGE
 *
 *                   Basic situation
 *       Source code { var obj = { name: 'Max' } }
 *
 *                     Using Proxy
 *  Source code { Proxy { var obj = { name: 'Max'} } }
 *
 *             Proxy wraps and encloses code
 *
 *  Now if we want to access obj, we have to go through
 *  this proxy. We have to setup certain Traps for obj
 *  e.g 'get' Trap that prevents direct access to obj.
 *                                                      */

// TRAPS IN ACTION //

(() => {
  // let person = {
  //   age: 27,
  // };
  // let handler = {
  //   get: function (target, name) {
  //     return name in target ? target[name] : 'Non existant';
  //   },
  // };
  // var proxy = new Proxy(person, handler);
  // console.log(person.age); // 27
  // console.log(proxy.age); // 27
  // console.log(person.name); // undefined
  // console.log(proxy.name); // "Non existant"
})();

// PROXIES AND REFLECT //

(() => {
  // let person = {
  //   age: 27,
  //   name: 'Max',
  // };
  // let handler = {
  //   get: function (target, name) {
  //     return name in target ? target[name] : 'Non existant';
  //   },
  //   set: function (target, property, value) {
  //     if (value.length >= 3) {
  //       Reflect.set(target, property, value);
  //     }
  //   },
  // };
  // var proxy = new Proxy(person, handler);
  // console.log(person.age); // 27
  // console.log(proxy.age); // 27
  // console.log(person.name); // "Max"
  // console.log(proxy.name); // "Max"
  // proxy.name = 'Lu';
  // console.log(proxy.name); // "Max"
  // proxy.name = 'Maximilian';
  // console.log(proxy.name); // "Max"
})();

// USING PROXIES AS PROTOTYPES

(() => {
  // let person = {
  //   age: 27,
  //   name: 'Max',
  // };
  // let handler = {
  //   get: function (target, name) {
  //     return name in target ? target[name] : 'Non existant';
  //   },
  // };
  // // Empty object instead of person
  // let proxy = new Proxy({}, handler);
  // console.log(proxy.name); // "Non existant"
  // // Proxies can be "__proto__"
  // Reflect.setPrototypeOf(person, proxy);
  // console.log(person);
  // // v {age: 27, name: "Max"}
  // //    age: 27
  // //    name: "Max"
  // //  > __proto__: Proxy
  // console.log(person.name); // "Max"
  // console.log(person.hobbies); // "Non existant"
})();

// PROXIES AS PROXIES //

(() => {
  // let person = {
  //   age: 27,
  //   name: 'Max',
  // };
  // let handler = {};
  // let protoHandler = {
  //   get: function (target, name) {
  //     return name in target ? target[name] : 'Non existant';
  //   },
  // };
  // let proxy = new Proxy({}, handler);
  // let protoProxy = new Proxy(proxy, protoHandler);
  // Reflect.setPrototypeOf(person, protoProxy);
  // console.log(person);
  // // v {age: 27, name: "Max"}
  // //    age: 27
  // //    name: "Max"
  // //  > __proto__: Proxy
  // console.log(person.name); // "Max"
  // console.log(person.hobbies); // "Non existant"
})();

// WRAPPING FUNCTIONS //

(() => {
  // function log(message) {
  //   console.log('Log entry created, message: ' + message);
  // }
  // log('Hello!'); // "Log entry created, message: Hello!"
  // let handler = {
  //   // apply trap
  //   apply: function (target, thisArg, argumentsList) {
  //     if (argumentsList.length == 1) {
  //       return Reflect.apply(target, thisArg, argumentsList);
  //     }
  //   },
  // };
  // let proxy = new Proxy(log, handler);
  // proxy('Hello from Proxy'); // Log entry created, message: Hello from Proxy
  // proxy('Hello', 10); // logs nothing (argumentsList.length > 1)
})();

// REVOCABLE PROXIES //

(() => {
  let person = {
    name: 'Max',
  };

  let handler = {
    get: function (target, property) {
      return Reflect.get(target, property);
    },
  };

  let { proxy, revoke } = Proxy.revocable(person, handler);

  console.log(proxy);
  // v Proxy {name: "Max"}
  //    [[Handler]]: null
  //    [[Target]]: null
  //    [[IsRevoked]]: true

  console.log(revoke); // ƒ () { [native code] }

  console.log(proxy.name); // "Max"

  revoke();

  console.log(proxy.name); // Uncaught TypeError: Cannot perform 'get' on a proxy that has been revoked
})();
