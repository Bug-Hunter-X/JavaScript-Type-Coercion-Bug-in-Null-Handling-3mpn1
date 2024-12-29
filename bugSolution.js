function foo(a, b) {
  if (a === null || b === null) {
    return null; 
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    return null; //Handle non-numbers
  }
  return a + b; 
}