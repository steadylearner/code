/* tslint:disable */
import * as wasm from "./web.wasm";

const slab = [{ obj: undefined }, { obj: null }, { obj: true }, { obj: false }];

let slab_next = slab.length;

function addHeapObject(obj) {
    if (slab_next === slab.length) slab.push(slab.length + 1);
    const idx = slab_next;
    const next = slab[idx];

    slab_next = next;

    slab[idx] = { obj, cnt: 1 };
    return idx << 1;
}

export function __wbg_static_accessor_document_720e62d1c8f32708() {
    return addHeapObject(document);
}

const __wbg_createElement_bbc983d1d03eef4f_target = HTMLDocument.prototype.createElement || function () {
    throw new Error(`wasm-bindgen: HTMLDocument.prototype.createElement does not exist`);
};

const stack = [];

function getObject(idx) {
    if ((idx & 1) === 1) {
        return stack[idx >> 1];
    } else {
        const val = slab[idx >> 1];

        return val.obj;

    }
}

const TextDecoder = typeof self === 'object' && self.TextDecoder
    ? self.TextDecoder
    : require('util').TextDecoder;

let cachedDecoder = new TextDecoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory;
}

function getStringFromWasm(ptr, len) {
    return cachedDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

export function __wbg_createElement_bbc983d1d03eef4f(arg0, arg1, arg2) {
    let varg1 = getStringFromWasm(arg1, arg2);
    return addHeapObject(__wbg_createElement_bbc983d1d03eef4f_target.call(getObject(arg0), varg1));
}

function GetOwnOrInheritedPropertyDescriptor(obj, id) {
    while (obj) {
        let desc = Object.getOwnPropertyDescriptor(obj, id);
        if (desc) return desc;
        obj = Object.getPrototypeOf(obj);
    }
    throw new Error(`descriptor for id='${id}' not found`);
}

const __wbg_body_ca01af6740791cdc_target = GetOwnOrInheritedPropertyDescriptor(HTMLDocument.prototype, 'body').get || function () {
    throw new Error(`wasm-bindgen: GetOwnOrInheritedPropertyDescriptor(HTMLDocument.prototype, 'body').get does not exist`);
};

export function __wbg_body_ca01af6740791cdc(arg0) {
    return addHeapObject(__wbg_body_ca01af6740791cdc_target.call(getObject(arg0)));
}

const __wbg_appendChild_2ae76f76b4f73946_target = Element.prototype.appendChild || function () {
    throw new Error(`wasm-bindgen: Element.prototype.appendChild does not exist`);
};

function dropRef(idx) {

    idx = idx >> 1;
    if (idx < 4) return;
    let obj = slab[idx];

    obj.cnt -= 1;
    if (obj.cnt > 0) return;

    // If we hit 0 then free up our space in the slab
    slab[idx] = slab_next;
    slab_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropRef(idx);
    return ret;
}

export function __wbg_appendChild_2ae76f76b4f73946(arg0, arg1) {
    __wbg_appendChild_2ae76f76b4f73946_target.call(getObject(arg0), takeObject(arg1));
}

const __wbg_setAttribute_07129b115be76c5f_target = Element.prototype.setAttribute || function () {
    throw new Error(`wasm-bindgen: Element.prototype.setAttribute does not exist`);
};

export function __wbg_setAttribute_07129b115be76c5f(arg0, arg1, arg2, arg3, arg4) {
    let varg1 = getStringFromWasm(arg1, arg2);
    let varg3 = getStringFromWasm(arg3, arg4);
    __wbg_setAttribute_07129b115be76c5f_target.call(getObject(arg0), varg1, varg3);
}
/**
* @returns {void}
*/
export function create_stuff() {
    return wasm.create_stuff();
}

export function __wbindgen_object_drop_ref(i) {
    dropRef(i);
}

