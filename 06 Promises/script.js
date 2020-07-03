/// PROMISES ///

// CREATING RESOLVING PROMISES //

(() => {
  // let promise = new Promise(function (resolve, reject) {
  //   setTimeout(function () {
  //     resolve('Done!'); // resolve is a function, where we can pass an argument, which we want to pass back out of the Promise once it has been resolved or just in case whenever we call the resolve... reject is the opposite.
  //   }, 1500);
  // });
  // promise.then(function (value) {
  //   console.log(value); // "Done" after 1500ms
  // }); // then means that once this promise is resolved, do that( what we've specified in parentheses )
})();

// REJECTING PROMISES //

(() => {
  // let promise = new Promise(function (resolve, reject) {
  //   setTimeout(function () {
  //     reject('. Failed!');
  //   }, 1500);
  // });
  // promise.then(function (value) {
  //   console.log(value); // "Uncaught (in promise) . Failed!"
  // });
})();

(() => {
  // let promise = new Promise(function (resolve, reject) {
  //   setTimeout(function () {
  //     reject('Failed!');
  //   }, 1500);
  // });
  // promise.then(
  //   function (value) {
  //     console.log(value);
  //   },
  //   function (error) {
  //     console.log(error); // Failed!
  //   }
  // );
})();

// CHAINING PROMISES //

(() => {
  // function waitASecond(seconds) {
  //   return new Promise(function (resolve, reject) {
  //     setTimeout(function () {
  //       seconds++;
  //       resolve(seconds);
  //     }, 1000);
  //   });
  // }
  // waitASecond(0)
  //   .then(waitASecond)
  //   .then(function (seconds) {
  //     console.log(seconds); // 2
  //   });
})();

// CATCHING ERRORS //

(() => {
  // function waitASecond(seconds) {
  //   return new Promise(function (resolve, reject) {
  //     if (seconds > 2) {
  //       reject('Rejected!');
  //     } else {
  //       setTimeout(function () {
  //         seconds++;
  //         resolve(seconds);
  //       }, 1000);
  //     }
  //   });
  // }
  // console.log('start');
  // waitASecond(1)
  //   .then(waitASecond)
  //   .then(function (seconds) {
  //     console.log(seconds); // 3
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // waitASecond(2)
  //   .then(waitASecond)
  //   .then(function (seconds) {
  //     console.log(seconds); //
  //   })
  //   .catch(function (error) {
  //     console.log(error); // "Rejected!" after a while
  //   });
  // waitASecond(3)
  //   .then(waitASecond)
  //   .then(function (seconds) {
  //     console.log(seconds);
  //   })
  //   .catch(function (error) {
  //     console.log(error); // "Rejected!" immediately
  //   });
  // // The order is following:
  // // "Rejected!" immediately
  // // "Rejected!" after a while
  // // 3 after ~ 3.6 seconds
})();

// BUILT-IN METHODS

(() => {
  // let promise1 = new Promise(function (resolve, reject) {
  //   setTimeout(function () {
  //     resolve('Resolved!');
  //   }, 1000);
  // });
  // let promise2 = new Promise(function (resolve, reject) {
  //   setTimeout(function () {
  //     reject('Rejected!');
  //   }, 2000);
  // });
  // console.log('start');
  // // Promise.all combines all promises in one and if all were resolved, then we recieve success!
  // Promise.all([promise1, promise2])
  //   .then(function (succss) {
  //     console.log(success);
  //   })
  //   .catch(function (error) {
  //     console.log(error); // "Rejected after 3 sec"
  //   });
})();
