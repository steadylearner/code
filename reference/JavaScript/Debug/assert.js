const assert = require('assert');
const util = require('util');
var val = 3;

// assert.equal += strict(==, ===), deep(complexity of comparision), not

assert.equal(1, "1");
assert.equal(true, util.isArray([]));
assert.equal(false, util.isArray({}));
assert.ok-(true, util.isArray([]));
// assert.strictEqual(1, "1");
assert.equal(true, val == 3, 'test 1 Not equal');

// assert.equal(false, util.isArray([]), 'Test failed'); *Custom Error Message

// use deep for comparing complex objects

assert.deepEqual([1,2,3], [1,2,3]);
assert.deepStrictEqual({a: '1'}, {a: '1'});
