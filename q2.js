setTimeout(() => console.log(1), 0);

Promise.resolve().then(() => {
    console.log(2);
    setTimeout(() => console.log(3), 0);
    Promise.resolve().then(() => {
        console.log(4);
    });
});
// explanation:
// first promise microtask logs 2,
// it includes timout (3) and
// another promise microtask (4).
// So, 4 logs before 3.
// and 1 will be before 3 because its before 3 and 
// both are macrotasks.