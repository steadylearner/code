import { memoizeWith, identity } from "ramda"; // or ramda from NPM
// import { memoizeWith, identity } from "../ramda"; // or ramda from NPM

// useShorcut for markdown <a> tags
// They start with either : or (
let useShortcut = (set = [["s-", "https://"]]) => (draft = "") => {
    let text = draft;
    set.forEach(value => {
        // Build regexp for each value of set here
        let regex = new RegExp(`: ${value[0]}`, 'g');
        text = text.replace(regex, `: ${value[1]}`);
        regex = new RegExp(`\[(]` + value[0], 'g'); // ESLint shows '\[', but without it, tests don't pass
        //  regex = new RegExp(`(]` + value[0], 'g');
        text = text.replace(regex, "(" + value[1]);
    });
    return text;
};

// When use want to undo this use reverseSet for the same set

useShortcut = memoizeWith(identity, useShortcut);

let useRegex = (set = [
    [/<br\s*?>/gi, "\r\n"],
    [/&lt;/g, "<"],
    [/&gt;/g, ">"],
    [/&amp;/g, "&"],
]) => (draft = "") => {
    let text = draft;
    set.forEach(value => {
        text = text.replace(value[0], value[1]);
    });
    return text;
};

useRegex = memoizeWith(identity, useRegex);

export {
    useShortcut,
    useRegex,
}
