const { dayOne } = require('./Day1/dayone.js');
const { dayTwo } = require('./Day2/daytwo.js');
const { dayThree } = require('./Day3/daythree.js');

// Day 1
console.log(`dayone (part1): ${dayOne(true)}`);
console.log(`dayone (part2): ${dayOne(false)}`);

// Day 2
console.log(`daytwo (part1): ${dayTwo(true)}`);
console.log(`daytwo (part2): ${dayTwo(false)}`);

// Day 3
console.log(`daythree (part1): ${dayThree(true)}`);
console.log(`daythree (part2): ${dayThree(false)}`);