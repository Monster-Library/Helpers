import countdownTimer from "./dates/countdownTimer/countdownTimer.js";
import timeInSeconds from "./dates/timeInSeconds/timeInSeconds.js";
import filterBy from "./filter/filterBy/filterBy.js";
import filterOneBy from "./filter/filterOneBy/filterOneBy.js";
import filterOneById from "./filter/filterOneById/filterOneById.js";

const users = [
  { _id: "u1", name: "Mariem Mohamed", age: 18 },
  { _id: "u2", name: "Rahma Ahmed", age: 23 },
  { _id: "u3", name: "Omnia Sameh", age: 26 },
];

console.log(timeInSeconds(5, "m"));
console.log(countdownTimer("9/13/2022"));
console.log(filterBy(users, "_id", "u1"));
console.log(filterOneBy(users, "_id", "u1"));
console.log(filterOneById(users, "u2"));
