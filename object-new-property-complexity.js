/**
 * I needed to improve the efficiency of a logic in todogrids.com
 * that initially had an O(n^2) complexity, which is terrible considering
 * users can have large numbers of todos.
 * I brought that down to O(n) with a hashmap, but was concerned if creating a new key-value pair
 * in an already large object is expensive.
 *
 * This proves empirically that it is NOT expensive, and has a constant runtime. O(n)
 */

let obj = {};

function time(fn) {
  const now = Date.now();
  fn();
  return Date.now() - now;
}

function addNewHash(key, value) {
  obj[key] = value;
}

function addNewHash_Fn(key, value) {
  return function () {
    addNewHash(key, value);
  };
}

const tests = [10, 100, 1000, 10000, 100000, 1_000_000, 10_000_000];
tests.forEach((t) => {
  obj = {};
  for (let i = 0; i < t; i++) {
    obj[i] = i;
  }
  console.log(t, time(addNewHash_Fn(t, t)));
});
