// const oranges = ['orange', 'Orange','apple'];
// const apples = ['just one apple'];
// oranges.forEach(fruit => {
//   console.count(fruit);
// });
// apples.forEach(fruit => {
//   console.count(fruit);
// });


const ProgressBar = require('progress');

const bar = new ProgressBar(':bar', { total: 10 });
const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  }
}, 100);
