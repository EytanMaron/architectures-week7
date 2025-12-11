async function level3() {
    console.log(1);
    await new Promise((resolve, reject) => {
        console.log(2);
        resolve();
        console.log(3);
    });
}

async function level2() {
    console.log(4);
    await level3();
    console.log(5);
}

async function level1() {
    console.log(6);
    await level2();
    console.log(7);
}

level1();
// explenation:
// first we log 6 from level1
// then we go to level2 and log 4
// then we go to level3 and log 1
// then it hits the promise before the await
// so it logs 2 and 3 immediately
// then the promise resolves and we go back to level3
// logging 5, then back to level2 logging 7