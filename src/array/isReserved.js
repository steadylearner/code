import { memoizeWith, identity, } from "ramda";
// import { memoizeWith, identity, } from "./ramda";

// const reserved = ["class", "className", "rewrite"];

let isReserved = (reserved = [""]) => (value = "") => {
    return reserved.includes(value);
}

isReserved = memoizeWith(identity, isReserved);

export {
    isReserved,
}