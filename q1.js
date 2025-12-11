console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);
Promise.resolve().then(() => {
  console.log(3);
});
console.log(4);
// explanation:
// first console logs, then come microtasks (Promises),
//  then macrotasks (setTimeout)