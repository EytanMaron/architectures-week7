async function demo() {
    console.log(1);
    await Promise.resolve();
    console.log(2);
    await Promise.resolve();
    console.log(3);
}

console.log(4);
demo();
console.log(5);
// explenation:
// first we log 4
// then 1 from the method demo and then we 
// hit await which leaves the method
// so we get 5.
// when the code is done we go bach to the awaited method
// and get 2 and then 3