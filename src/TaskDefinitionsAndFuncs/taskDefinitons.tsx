import { biggestAscending, calculator } from "./funcs";

const answers = [
  "For a full stack app, I would prefer next.js, react, redux, typescript and firebase. With next.js I can handle both server side rendering and client side rendering, implement api endpoints and my pages will be rendered on ssr first so SEO agents may get my pages's content and list them. React is very dynamic. I think one of the frameworks vue, angular or react is a must in frontend. Redux is also mandatory to handle app wide states and to avoid prop chains. Firebase and firestore are easy to use, cost effective and scalable.Since data is stored as JSON objects, nosql dbs are easy to use. I may prefer MONGODB too. I would develop the app with agile methodology. In first 3 weeks, prototype should be ready. In 6 months full functional app should be in service.",
  "One can develop same apps with both python and js. Python is more generally used in data science, statistics, artificial intelligence and backends. JS is being used in both sides (Node.js and React.js). Python is easier to implement. Becuase its syntax and code seems like plain English.",

  "Both are object oriented programing languages. They have classes, inheritance, polymorphism, data encapsulation etc. C++ and C best suit for portable devices, are low-level language and are good for embedded programing. They give the user control over the memory. But control over the memory may become a difficult task, they don't have garbage memory collector, and in Web they are hard to code. Python and JS are high-level programming languages. JS was built for the web, and is the most widely used language around the world.",
  "Access management is the first think to handle. Complex pwd, pwd history, pwd age, assiging roles to profiles, and profiles to users are important. Secondly iptables are important for managing network. Than I will manage logs and take backups periodically. Capacity management, cpu utilisation, heat, humidity, physical securtiy are also important. ",
];

const questions = [
  "You have the task of building a software with a UI. What programming languages /tools /frameworks can you choose from and what approach do you prefer in which circumstance?",
  "Please explain major differences between JavaScript and Python. How can you adapt one to have the features the other has?",
  "Please explain major differences between JavaScript/Python and C/C++.",
  "You ordered a Linux dedicated server in an online data center. How do you secure it? Please write the actions you will take.",
];

const tasks = [
  {
    name: "Task 1",
    task: "Develop a term calculator that can handle (), *, /, +, and -. For example, if the user enters the term (5 + 8) * 3/8 +3, the term calculator shall calculate and output the result according to the school rules of term calculations. These rules are: () before * and /, * and / before + and -. Several * and / are calculated from left to right, several + and - also from left to right. Important: The actual algorithm must be implemented itself. The use of functions like eval in JavaScript are not permitted.",
    code: calculator,
    run: 'calculator("(-5+4*2+5-3) * 3/8 +3")',
    type: "code",
  },
  {
    name: "Task 2",
    task: "Thomas likes numbers. As a meditation exercise, he likes to go through all numbers starting with 1 and going up, and then marking all numbers whose digits are sorted in ascending order. For example, 11235888 is such a number. After a while, he stops. Write an efficiently designed program which, after entering a number between 1 and 10^18, which represents the last number checked by Thomas, then outputs the last number marked by Thomas.\r\nExamples:Input: 23245 Output: 22999\r\nInput: 11235888 Output: 11235888\r\nInput: 111110 Output: 99999\r\nInput: 33245 Output: 29999\r\nTip: Going through the numbers one by one and testing them is not efficient enough.",
    code: biggestAscending,
    run: 'biggestAscending("23245")',
    type: "code",
  },
  {
    name: "Task 3",
    questions,
    type: "text",
    answers,
  },
  {
    name: "My LeetCode",
    type: "iframe",
    src: "https://myleetcode.vercel.app/",
    title: "YA's LeetCode solutions",
  },
  {
    name: "My Portfolio",
    type: "iframe",
    src: "https://yaprojects.netlify.app/",
    title: "YA's Portfolio",
  },
];
export default tasks;
