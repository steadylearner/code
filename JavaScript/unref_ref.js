const interval = setInterval((name) => {
    console.log("Hello " + name);
}, 3000, "Shelley");

const timer = setTimeout((interval) => {
    clearInterval(interval);
    console.log("cleared timer");
}, 30000, interval); 

timer.unref();

console.log("Timer may not work.");