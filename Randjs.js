const { floor, random } = Math;

// Removes decimal points from a floating point number
const cutDecimals = (float, howMany) => {
  /* 
    TODO:
      [IMPORTANT] handle rounding last remaining decimal if last cut decimal is >= 5 
  */
  const [intPart, floatPart] = String(float).split('.');
  if (howMany >= floatPart.length) return intPart; // if howMany is larger than the number of decimals return just the integer part.
  const newfloatPart = floatPart.slice(0, -howMany);
  return `${intPart}.${newfloatPart}`;
}

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
    ? cutDecimals(randomFloat, precision)
    : randomFloat;
}

// Returns a random item from a list
const randItem = list => list[randInt([0, list.length])];


// Tests | Should implement testing through a library later
console.log(cutDecimals(1.1251, 4));
console.log(randInt([5]));
console.log(randInt([5, 99]));
console.log('randfloat', randFloat([5, 99], 5));
console.log(randItem(['a', 'abcda', '12341']));
