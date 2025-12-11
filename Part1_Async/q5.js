async function level3() {
    console.log(1);
    await new Promise((resolve, reject) => {
        console.log(2);
        resolve();
    });
    console.log(3);
}

async function level2() {
    console.log(4);
    await level3();
    console.log(5);
}

async function level1() {
    console.log(6);
    level2();
    console.log(7);
}

level1();
// explenation:
// the bigining is the same as before 6 4 1 2
// but after 2 we go back to who every called is
// that is level 2 and becouse its also awaited
// we go back to level1 and pring 7
// then we fingh level 1 by printing 3
// and finally we go back to level2 and print 5