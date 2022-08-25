/**
 * Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.
 * You should not use case, switch, or if statements
 */

function phoneticLookup(val) {
  let result = '';

  const keys = {
    alpha: 'Adams',
    bravo: 'Boston',
    charlie: 'Chicago',
    delta: 'Denver',
    echo: 'Easy',
    foxtrot: 'Frank',
  };
  result = keys[val];
  return result;
}

phoneticLookup('charlie');
