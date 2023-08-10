const greetings = (name) => {
  console.log(`Hello ${name}`);
};

greetings("Raju");
greetings("Abhi");

let { add, sub } = require("./calculator");
console.log(add(3, 4));
console.log(sub(5, 3));
