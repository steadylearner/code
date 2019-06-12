let interval1 = setInterval((name) => console.log("Hello " + name), 3000, "Shelley");

setTimeout((interval) => {
    clearInterval(interval);
    console.log('cleared timer');
}, 30000, interval1);

console.log("Wating on first interval");

// let timer1 = setTimeout((name) => console.log("Hello " + name), 3000, "Shelley");

// console.log("Wating on timer...");

// setTimeout((timer) => {
//     clearTimeout(timer);
//     console.log('cleared timer');
// }, 3000, timer1);