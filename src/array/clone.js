import { memoizeWith, identity, } from "ramda";
// import { memoizeWith, identity, } from "./ramda";

let clone = (element = {}) => (times = 1) => {
    // if (times > 1000) {
    //     console.warn("'clone' array will may pause your system");
    // }
    return Array(times).fill(element);
};

clone = memoizeWith(identity, clone);

export {
    clone,
}