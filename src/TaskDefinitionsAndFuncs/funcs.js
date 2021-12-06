export const twoSum = function (nums, target) {
  const comp = {};
  nums.forEach((el, i) => (comp[el] = i));
  let i = 0;
  while (i < nums.length) {
    if (comp[target - nums[i]] && i !== comp[target - nums[i]])
      return [i, comp[target - nums[i]]];

    i++;
  }
};
