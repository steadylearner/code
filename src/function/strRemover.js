import { memoizeWith, identity, } from "ramda";
// import { memoizeWith, identity, } from "./ramda";

let strRemover = (x = "") => (y = "undefined") => {
    return x
        .split(" ")
        .filter(x => x !== y)
        .join(" ");
};

strRemover = memoizeWith(identity, strRemover);

export {
    strRemover,
}