const fs = require('fs');

function readFileAndCalcOutputDay2(filePath) {
    return new Promise((res, rej) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                rej(err);
                return;
            }
            const d = data.split(/\r?\n/)

            let sum1 = 0;
            for (const n of d) {
                const split = n.split(" ");
                const oppo = split[0];
                const me = split[1];
                if (me === "X") { // Rock
                    sum1 += 1 + imRock(oppo);
                } else if (me === "Y") { // Paper
                    sum1 += 2 + imPaper(oppo);
                } else if (me === "Z") { // Scissors
                    sum1 += 3 + imScissors(oppo);
                }
            }
            let sum2 = 0;
            for (const n of d) {
                const split = n.split(" ");
                const oppo = split[0];
                const res = split[1];
                if (oppo === "A") { // Rock
                    sum2 += hesRock(res);
                } else if (oppo === "B") { // Paper
                    sum2 += hesPaper(res);
                } else if (oppo === "C") { // Scissors
                    sum2 += hesScissors(res);
                }
            }
            res([sum1, sum2])
        });
    });
}

function imRock(op) {
    if (op === "A") { // Rock
        return 3
    } else if (op === "C") { // Scissors
        return 6
    }
    return 0
}

function imPaper(op) {
    if (op === "A") { // Rock
        return 6;
    } else if (op === "B") { // Paper
        return 3;
    }
    return 0;
}

function imScissors(op) {
    if (op === "B") { // Paper
        return 6;
    } else if (op === "C") { // Scissors
        return 3;
    }
    return 0;
}


function hesRock(res) {
    if (res === "X") {
        return 0 + 3
    } else if (res === "Y") {
        return 3 + 1
    }
    return 6 + 2
}

function hesPaper(res) {
    if (res === "X") {
        return 0 + 1
    } else if (res === "Y") {
        return 3 + 2
    }
    return 6 + 3
}

function hesScissors(res) {
    if (res === "X") {
        return 0 + 2
    } else if (res === "Y") {
        return 3 + 3
    }
    return 6 + 1
}

module.exports = {
    readFileAndCalcOutputDay2
}