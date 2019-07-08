const hello = (name = "Steadylearner") => console.log(`Hello from ${name}`);

window.hello = hello;

export {
    hello,
}
