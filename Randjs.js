const { floor, random } = Math;

// Return a random int / optional: limits
const randInt = limits => limits.length === 1
  ? floor(random() * (limits[0] + 1))
  : floor(random() * limits[1]) + limits[0]

// Return a random float / optional: limits & decimal precision
const randFloat = (limits, precision = null) => {
  const randomFloat = limits.length === 1
    ? random() * (limits[0] + 1)
    : (random() * limits[1]) + limits[0];

  return precision !== null
    ? randomFloat.toFixed(precision)
    : randomFloat;
}

// Returns a random item from a list
const randItem = list => list[randInt([0, list.length])];


// Tests | Should implement testing through a library later
console.log(randInt([5]));
console.log(randInt([5, 99]));
console.log('randfloat', randFloat([5, 99], 1));
console.log(randItem(['a', 'abcda', '12341']));
