// partOne - VPCDMSLWJ
// partTwo - TPWCGNCCG

const fs = require('fs');
const path = require('node:path');

const dayFive = (partOne) => {
    const data = fs.readFileSync(path.resolve(__dirname, 'data.dat'), 'utf-8')
        .replace(/\d+/g, function (a) { return a - 1; });

    const [stacks, moves] = data.split('\r\n\r\n');


    const firstRow = stacks.split("\r\n").pop();
    const totalStacks = parseInt([...firstRow].slice(firstRow.length - 2, firstRow.length - 1)[0]) + 1;
    const arrayOfStacks = [];

    for (let i = 0; i < totalStacks; i++) {
        arrayOfStacks.push([]);
    }

    stacks.split("\r\n").reverse().forEach(row => {
        let currentStackNum = 0;
        [...row].slice(1).map((char, index) => {
            if (index == 0 || index % 4 == 0) {
                if ((char.length === 1 && char.toLowerCase().match(/[a-z]/i)))
                    arrayOfStacks[currentStackNum].push(char);

                currentStackNum++;
            }
        });
    });

    moves.split('\r\n').forEach(row => {
        let movesInRow = row.match(/[0-9]+/g);
        // we lowered every number in the file by one
        // for array indexes, so we have to add one here
        let numberOfCrates = parseInt(movesInRow[0]) + 1;
        let from = parseInt(movesInRow[1]);
        let to = parseInt(movesInRow[2]);

        if (partOne) {
            for (let i = 0; i < numberOfCrates; i++) {
                arrayOfStacks[to].push(arrayOfStacks[from].pop());
            }
            return;
        }

        const crates = arrayOfStacks[from].splice(arrayOfStacks[from].length - numberOfCrates, numberOfCrates);
        arrayOfStacks[to].push.apply(arrayOfStacks[to], crates);
    });

    let result = "";

    for (let i = 0; i < totalStacks; i++) {
        result += arrayOfStacks[i].pop();
    }

    return result;
}

exports.dayFive = dayFive;