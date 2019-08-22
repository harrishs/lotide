const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  let keys = Object.keys(object);
  for (item in keys) {
    if (callback(object[keys[item]]) == true) {
      return keys[item];
    }
  }
};

const find = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

const find2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 1);

const find3 = findKey({i: {i: []}, 2: {i: [1]}, f: 0}, x => x.i = 1);

assertEqual(find, "noma");
assertEqual(find2,"Blue Hill");
assertEqual(find2,);