export const twoSum = {
  name: "twoSum",
  func: "function (nums, target) {\n  const comp = {};\n  nums.forEach((el, i) => comp[el] = i);\n  let i = 0;\n\n  while (i < nums.length) {\n    if (comp[target - nums[i]] && i !== comp[target - nums[i]]) return [i, comp[target - nums[i]]];\n    i++;\n  }\n\n  return -1;\n}",
};
