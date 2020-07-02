let keyValue = 1000;
function test() {
  keyValue = 2000;
  console.log('tested!');
}

let ab = 'Some text';
export let obj = {
  keyValue: keyValue,
  test: test,
};
