import { useless } from "./useless";
import { commonKeys } from "./commonKeys";
import { cutLeft } from "./cut";
import { repeat } from "./repeat";
import { strRemover } from "./strRemover";

const hasOwnProperty = (obj = {}) => (name = "") =>
    Object.prototype.hasOwnProperty.call(obj, name);

const objectFromArray = (array = []) => {
    return Object.assign({}, ...array);
};

export {
    useless,
    commonKeys,
    cutLeft,
    repeat,
    strRemover,
    hasOwnProperty,
    objectFromArray,
}



