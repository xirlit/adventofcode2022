const { dayOne } = require('./Day1/dayone.js');
const { dayTwo } = require('./Day2/daytwo.js');
const { dayThree } = require('./Day3/daythree.js');
const { dayFour } = require('./Day4/dayfour.js');
const { dayFive } = require('./Day5/dayfive.js');
const { daySix } = require('./Day6/daysix.js');

// Day 1
console.log(`dayone (part1): ${dayOne(true)}`);
console.log(`dayone (part2): ${dayOne(false)}`);

// Day 2
console.log(`daytwo (part1): ${dayTwo(true)}`);
console.log(`daytwo (part2): ${dayTwo(false)}`);

// Day 3
console.log(`daythree (part1): ${dayThree(true)}`);
console.log(`daythree (part2): ${dayThree(false)}`);

// Day 4
console.log(`dayfour (part1): ${dayFour(true)}`);
console.log(`dayfour (part2): ${dayFour(false)}`);

// Day 5
console.log(`dayfive (part1): ${dayFive(true)}`);
console.log(`dayfive (part2): ${dayFive(false)}`);

// Day 6
console.log(`daysix (part1): ${daySix(true)}`);
console.log(`daysix (part2): ${daySix(false)}`);