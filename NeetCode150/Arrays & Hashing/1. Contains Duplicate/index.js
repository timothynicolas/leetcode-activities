const hasDuplicate = (nums) => {
  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }

  return false;
};
// const hasDuplicate = (nums) => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

// Test Cases

console.log(hasDuplicate([1, 2, 3, 3]));
console.log(hasDuplicate([1, 2, 3, 4]));
