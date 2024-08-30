const now = new Date();

const today = now.getDate();
const month = now.getMonth();
const year = now.getFullYear();

const months = [
  "yanvar",
  "fevral",
  "mart",
  "aprel",
  "may",
  "iyun",
  "iyul",
  "avgust",
  "sentabr",
  "oktiyabr",
  "nayabr",
  "dekabr",
];

console.log("Today:", today);
console.log("Month:", months[month]);
console.log("Year:", year);

const hour = now.getHours();
const minute = now.getMinutes();
const second = now.getSeconds();

console.log(`${hour}:${minute}:${second}`);
