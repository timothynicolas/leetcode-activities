const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const tally = {};

  for (const char of s) {
    tally[char] = (tally[char] || 0) + 1;
  }

  for (const char of t) {
    if (!tally[char]) return false;
    tally[char]--;
  }

  return true;
};

// Test Cases
console.log(isAnagram("racecar", "carrace"));
console.log(isAnagram("jar", "jam"));
console.log(isAnagram("rene", "baterbonia"));
