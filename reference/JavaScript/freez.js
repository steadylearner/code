"use strict"

let -> Block Level

const -> Block Level, Use Object.freeze(), It is not immutable -> use libraries or other things to achieve this goal  

Object.freeze();

const object1 = {
    property1: X;
  };
  
  const object2 = Object.freeze(object1);
  
  object2.property1 = Y;
  // Throws an error in strict mode
  
  console.log(object2.property1);
  // expected output: X

// deepFreeze -> There must be library related to it.

function deepFreeze(obj) {

    // Retrieve the property names defined on obj
    var propNames = Object.getOwnPropertyNames(obj);
  
    // Freeze properties before freezing self
    propNames.forEach(function(name) {
      var prop = obj[name];
  
      // Freeze prop if it is an object
      if (typeof prop == 'object' && prop !== null)
        deepFreeze(prop);
    });
  
    // Freeze self (no-op if already frozen)
    return Object.freeze(obj);
  }
  
  obj2 = {
    internal: {}
  };
  
  deepFreeze(obj2);
  obj2.internal.a = 'anotherValue';
  obj2.internal.a; // undefined

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
