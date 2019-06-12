import _curry1 from "./internal/_curry1";
import _identity from "./internal/_identity";

/**
 * It does nothing but return the parameter supplied to it.
 * used fof default or placeholder function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> a
 * @param {*} x The value to return.
 * @return {*} The input value, `x`.
 * @example
 *
 *      R.identity(1); //=> 1
 *
 *      var obj = {};
 *      R.identity(obj) === obj; //=> true
 * @symb R.identity(a) = a
 */

var identity = /*#__PURE__*/ _curry1(_identity);
export default identity;
