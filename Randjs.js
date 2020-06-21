const { floor, random } = Math;

const randInt = ({ limits }) => limits.length === 1
  ? floor(random() * (limits[0] + 1))
  : floor(random() * limits[1]) + limits[0]

// Return a random float / optional: limits & decimal precision
const randFloat = ({ limits, precision }) => {
  if (limits[0] > limits[1]) {
    console.error('Please provide valid limits');
    return undefined;
  }
  const randomFloat = limits.length === 1
    ? random() * (limits[0] + 1)
    : (random() * limits[1]) + limits[0]; // problematic

  return precision
    ? randomFloat.toFixed(precision)
    : randomFloat;
}

// Returns a random item from a list
const randItem = list => list[randInt([0, list.length])];


// Tests | Should implement testing through a library later
console.log(randInt([5]));
console.log(randInt([5, 99]));
console.log('randfloat', randFloat({ limits: [5, 6], precision: 5 }));
console.log(randItem(['a', 'abcda', '12341']));
