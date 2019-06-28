import { memoizeWith, identity, } from "ramda";
// import { memoizeWith, identity, pick } from "../ramda";

let cutLeft = (charlist = " ") => (str = "") => {
    return str.replace(new RegExp("^[" + charlist + "]+"), "");
};

cutLeft = memoizeWith(identity, cutLeft);

export {
    cutLeft,
}