const commonKeys = (specificProp = {}) => (sharedProp = {}) => {
    let keys = [];
    for (let i in specificProp) {
        if (i in sharedProp) {
            keys.push(i);
        }
    }
    return keys;
};

export {
    commonKeys,
}