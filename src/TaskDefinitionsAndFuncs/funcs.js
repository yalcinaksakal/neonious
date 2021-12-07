export const calculator = {
  name: "calculator",
  func: 'function (operation) {\r\n  const operators = ["(", ")", "*", "/", "+", "-"];\r\n  const nums = Array.from(Array(10).keys());\r\n\r\n  const chekValidity = op => {\r\n    if (op.filter(ch => !operators.includes(ch) && !nums.includes(+ch)).length)\r\n      return false;\r\n\r\n    const stack = [],\r\n      map = { "(": ")" },\r\n      prntArr = op.filter(ch => ch === "(" || ch === ")");\r\n\r\n    for (let i = 0; i < prntArr.length; i++) {\r\n      if (!stack.length && !map[prntArr[i]]) return false;\r\n      if (map[prntArr[i]]) {\r\n        stack.push(prntArr[i]);\r\n        continue;\r\n      }\r\n      if (map[stack[stack.length - 1]] === prntArr[i]) {\r\n        stack.pop();\r\n        continue;\r\n      }\r\n      return false;\r\n    }\r\n    return !stack.length;\r\n  };\r\n\r\n  const opArr = operation\r\n    .split("")\r\n    .map(ch => ch.trim())\r\n    .filter(ch => ch !== "");\r\n\r\n  if (!chekValidity(opArr)) return "Oparation is not valid";\r\n\r\n  let num = [],\r\n    char,\r\n    temp,\r\n    i = 0;\r\n\r\n  const addNum = (start, end) => {\r\n    opArr.splice(start, end);\r\n    opArr.splice(start, 0, +num.join(""));\r\n    num = [];\r\n  };\r\n\r\n  while (i < opArr.length) {\r\n    char = opArr[i];\r\n    if (nums.includes(+char)) num.push(char);\r\n    else if (num.length) {\r\n      temp = num.length;\r\n      addNum(i - temp, temp);\r\n      i = i - temp;\r\n    }\r\n    i++;\r\n  }\r\n  if (num.length) addNum(opArr.length - num.length, num.length);\r\n\r\n  let result = 0,\r\n    lastPrnths = [],\r\n    firstPrnths = [];\r\n\r\n  opArr.forEach((ch, i) => {\r\n    if (ch === "(") firstPrnths.push(i);\r\n    else if (ch === ")") lastPrnths.push(i);\r\n  });\r\n\r\n  const operate = (f, l) => {\r\n    const range = opArr.splice(f, l + 1);\r\n    range.pop();\r\n    range.shift();\r\n\r\n    const reduceRange = (start, end, val) => {\r\n      range.splice(start, end);\r\n      range.splice(start, 0, val);\r\n      num = [];\r\n    };\r\n    i = 1;\r\n    while (i < range.length - 1) {\r\n      char = range[i];\r\n      if (char === "*" || char === "/") {\r\n        num = range[i - 1];\r\n        num = char === "*" ? num * range[i + 1] : num / range[i + 1];\r\n        reduceRange(i - 1, 3, num);\r\n        i = i - 2;\r\n      }\r\n      i++;\r\n    }\r\n  };\r\n\r\n  // //operate until single number remains in the list, in a loop\r\n  // now on easy, repeat the process below...\r\n  num = firstPrnths.pop();\r\n  operate(\r\n    num,\r\n    lastPrnths.splice(\r\n      lastPrnths.findIndex(el => el > num),\r\n      1\r\n    )\r\n  );\r\n\r\n  return result;\r\n}',
};

export const biggestAscending = {
  name: "biggestAscending",
  func: 'function (num) {\r\n  if (typeof num === "number") num += "";\r\n  const l = num.length;\r\n  const digits = num.split("");\r\n  let i = l - 1;\r\n  while (i > 0) {\r\n    if (digits[i] < digits[i - 1]) {\r\n      for (let k = i; k < l; k++) digits[k] = 9;\r\n      digits[i - 1]--;\r\n      //   i = l;\r\n      continue;\r\n    }\r\n    i--;\r\n  }\r\n  while (!digits[0] && digits.length) digits.shift();\r\n  return digits.join("");\r\n}',
};
