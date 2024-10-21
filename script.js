function deepEquals(a, b) {
  // 1. If both values are strictly equal, they are deeply equal.
  if (a === b) {
    // Handle the special case of NaN (NaN !== NaN)
    return a !== a && b !== b ? true : true;
  }

  // 2. Handle the case where both values are NaN
  if (typeof a === "number" && typeof b === "number" && isNaN(a) && isNaN(b)) {
    return true;
  }

  // 3. Handle the case where one is null and the other is undefined (or vice versa)
  if (a === null || b === null || a === undefined || b === undefined) {
    return false;
  }

  // 4. If both values are arrays, recursively check each element
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length; i++) {
      if (!deepEquals(a[i], b[i])) {
        return false;
      }
    }
    return true;
  }

  // 5. If both values are objects, compare their keys and values recursively
  if (typeof a === 'object' && typeof b === 'object') {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);

    // Check if both objects have the same number of keys
    if (aKeys.length !== bKeys.length) {
      return false;
    }

    // Check if all keys and values are deeply equal
    for (let key of aKeys) {
      if (!deepEquals(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }

  // 6. If none of the above conditions are met, the values are not deeply equal
  return false;
}

module.exports = deepEquals;
