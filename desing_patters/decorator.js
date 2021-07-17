let loggedIn = false;

function callIfAuthenticated(fn) {
  return !!loggedIn && fn();
}

function sum(a, b) {
  return a + b
}

console.log(callIfAuthenticated(()=> sum(3, 5)))
loggedIn = true
console.log(callIfAuthenticated(()=> sum(3, 5)))
loggedIn = false
console.log(callIfAuthenticated(()=> sum(3, 5)))
console.log(callIfAuthenticated(()=> sum(3, 5)))