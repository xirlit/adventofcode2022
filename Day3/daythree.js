// partOne - 7967
// partTwo - 2716

const fs = require('fs');
const path = require('node:path');

const getLetterPriority = (letter) => {
    return (letter.charCodeAt(0) < 97) ? letter.charCodeAt(0) - 38 : letter.charCodeAt(0) - 96;
}

const dayThree = (partOne) => {
    const data = fs.readFileSync(path.resolve(__dirname, 'data.dat'), 'utf-8');

    if (partOne) {
        return data.trim().split('\r\n').map(rucksacks => {
            let rucksackOne = rucksacks.slice(0, rucksacks.length / 2);
            let rucksackTwo = rucksacks.slice(rucksacks.length / 2);

            let letter = [...rucksackOne].filter(c => rucksackTwo.includes(c))[0];
            return getLetterPriority(letter);
        }).reduce((prev, curr) => curr + prev, 0);
    }

    return data.match(/.*\r\n.*\r\n.*\r\n/g).map(group => {
        let [elfOne, elfTwo, elfThree] = group.split("\r\n");

        let letter = [...elfOne].filter(c => elfTwo.includes(c) && elfThree.includes(c))[0];
        return getLetterPriority(letter);
    }).reduce((prev, curr) => curr + prev, 0);
}

exports.dayThree = dayThree;