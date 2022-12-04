const fs = require('fs');

const path = require('node:path');

dayOne = () => {
    const data = fs.readFileSync(path.resolve(__dirname, 'data.dat'), 'utf-8');

    const sums = data.split("\r\n\r\n")
        .map(item => {
            return item.split('\r\n')
                .reduce(
                    (accumulator, currentValue) => accumulator + parseInt(currentValue),
                    0
                );
        });

    return sums.sort((a, b) => b - a)
        .slice(0, 3)
        .reduce((accumulator, currentValue) => accumulator + parseInt(currentValue), 0);
}

exports.dayOne = dayOne;