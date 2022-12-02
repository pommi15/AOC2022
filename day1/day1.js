const fs = require('fs');



function part1(filePath) {
    return new Promise((res, rej) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return rej(err);
            }
            const d = data.split(/\r?\n/)
            let counter = 0;
            const elves = []
            for (const n of d) {
                const num = Number(n)
                if (num) {
                    counter += num;
                } else {
                    elves.push(counter)
                    counter = 0;
                }
            }
            elves.push(counter)
            const finalElves = elves.sort((a, b) => b - a)
            res(finalElves[0]);
        });
    })
}


function part2(filePath) {
    return new Promise((res, rej) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return rej(err);
            }
            const d = data.split(/\r?\n/)
            let counter = 0;
            const elves = []
            for (const n of d) {
                const num = Number(n)
                if (num) {
                    counter += num;
                } else {
                    elves.push(counter)
                    counter = 0;
                }
            }
            elves.push(counter)
            const finalElves = elves.sort((a, b) => b - a)
            res(finalElves[0] + finalElves[1] + finalElves[2]);
        });
    })
}


module.exports = {
    part1,
    part2
}