// partOne - 424
// partTwo - 804

const fs = require('fs');
const path = require('node:path');

const getRange = (start, end) => {
    return Array.from({ length: end - start }, (_, i) => start + i);
}

const getSections = (pair) => {
    let [firstElf, secondElf] = pair.split(',');

    let firstElfSections = getRange(parseInt(firstElf.split('-')[0]), parseInt(firstElf.split('-')[1]) + 1);
    let secondElfSections = getRange(parseInt(secondElf.split('-')[0]), parseInt(secondElf.split('-')[1]) + 1);

    return { firstElfSections, secondElfSections }
}

const dayFour = (partOne) => {
    const data = fs.readFileSync(path.resolve(__dirname, 'data.dat'), 'utf-8');

    return data.split("\r\n").filter(pair => {
        let { firstElfSections, secondElfSections } = getSections(pair);

        return (partOne) ?
            firstElfSections.every(element => secondElfSections.includes(element)) ||
            secondElfSections.every(element => firstElfSections.includes(element)) :
            firstElfSections.some(element => secondElfSections.includes(element)) ||
            secondElfSections.some(element => firstElfSections.includes(element));
    }).length;
}

exports.dayFour = dayFour;