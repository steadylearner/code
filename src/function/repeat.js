import { useless } from "./useless";

const repeat = (fn = useless) => (times = 1) => {
    if (times > 1000) {
        console.warn("'repeat' may pause your system");
    }
    for (let i = 0; i < times; i++) {
        fn();
    }
};

export {
    repeat,
}


