const readFileAndCalcOutputDay2 = require('./day2.js').readFileAndCalcOutputDay2
const filePath = './day2/inputs/'
describe("day2", () => {
    it('should do test1 correctly', async () => {
        await expect(readFileAndCalcOutputDay2(filePath + 'test1.txt')).resolves.toStrictEqual([15, 12]);
    });

    it('should do test1 correctly', async () => {
        await expect(readFileAndCalcOutputDay2(filePath + 'test2.txt')).resolves.toStrictEqual([45, 45]);
    });

    it('should do real data correctly', async () => {
        await expect(readFileAndCalcOutputDay2(filePath + 'real.txt')).resolves.toStrictEqual([9241, 14610]);
    });
})