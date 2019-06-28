import { memoizeWith, identity } from "ramda"; // or ramda from NPM
// import { memoizeWith, identity } from "./ramda"; // or ramda from NPM

let reverseSet = (arrayOfArrays = [[]]) => {
    return arrayOfArrays.map(array => array.reverse());
};

reverseSet = memoizeWith(identity, reverseSet);

export {
    reverseSet,
}