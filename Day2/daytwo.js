// partOne - 15337
// partTwo - 11696

const fs = require('fs');

const path = require('node:path');

// A, X, R - rock
// B, Y, P - paper
// C, Z, S - scissors
const convertToUniversal = (char, player) => {
    if (player == 'me') {
        switch (char) {
            case 'X': return 'R';
            case 'Y': return 'P';
            case 'Z': return 'S';
        }
    }
    else {
        switch (char) {
            case 'A': return 'R';
            case 'B': return 'P';
            case 'C': return 'S';
        }
    }
}

const getPoints = (enemyTurn, myTurn) => {
    let points;
    switch (myTurn) {
        case 'R': points = 1;
            break;
        case 'P': points = 2;
            break;
        case 'S': points = 3;
            break;
    };

    if (myTurn == enemyTurn) {
        return points + 3;
    }

    if (myTurn == 'R' && enemyTurn == 'S') {
        return points + 6;
    }

    if (myTurn == 'P' && enemyTurn == 'R') {
        return points + 6;
    }

    if (myTurn == 'S' && enemyTurn == 'P') {
        return points + 6;
    }

    return points;
}

const dayTwo = (partOne) => {
    const data = fs.readFileSync(path.resolve(__dirname, 'data.dat'), 'utf-8');

    return data.split('\r\n').map(turn => {
        let firstChar = convertToUniversal(turn.split(' ')[0], 'enemy');
        let secondChar = turn.split(' ')[1];

        if (partOne) {
            return getPoints(firstChar, convertToUniversal(secondChar, 'me'));
        }

        let myTurn;

        if (secondChar == 'X') {
            switch (firstChar) {
                case 'R': myTurn = 'S';
                    break;
                case 'P': myTurn = 'R';
                    break;
                case 'S': myTurn = 'P';
                    break;
            }
        }

        if (secondChar == 'Z') {
            switch (firstChar) {
                case 'R': myTurn = 'P';
                    break;
                case 'P': myTurn = 'S';
                    break;
                case 'S': myTurn = 'R';
                    break;
            }
        }

        if (secondChar == 'Y') {
            myTurn = firstChar;
        }

        return getPoints(firstChar, myTurn);
    }).reduce((partialSum, a) => partialSum + a, 0);
}

exports.dayTwo = dayTwo;