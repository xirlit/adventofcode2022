// partOne - 1542
// partTwo - 3153

const fs = require('fs');
const path = require('node:path');

const daySix = (partOne) => {
    const data = fs.readFileSync(path.resolve(__dirname, 'data.dat'), 'utf-8');
    const numberOfCharacters = partOne ? 4 : 14

    return [...data]
        .findIndex((char, index) => index >= numberOfCharacters - 1 &&
            Array.from(new Set([...data.substring(index - (numberOfCharacters - 1), index + 1)])).length == numberOfCharacters) + 1;
}

exports.daySix = daySix;