const {
    part1,
    part2
} = require('./day1.js');

const readFileAndCalcOutputDay1 = require('./day1.js').readFileAndCalcOutputDay1
const filePath = './day1/inputs/'
describe("day1", () => {

    describe("test1 data", () => {


        it('should do test1 correctly', async () => {
            await expect(part1(filePath + 'test1.txt')).resolves.toStrictEqual(24000);
        });
        it('should do test1 correctly', async () => {
            await expect(part2(filePath + 'test1.txt')).resolves.toStrictEqual(45000);
        });
    })

    it('should do test2 correctly', async () => {
        await expect(part1(filePath + 'test2.txt')).resolves.toStrictEqual(46);
    });
    it('should do test2 correctly', async () => {
        await expect(part2(filePath + 'test2.txt')).resolves.toStrictEqual(67);
    });

    it('should do real data correctly', async () => {
        await expect(part1(filePath + 'real.txt')).resolves.toStrictEqual(66306);
    });
    it('should do real data correctly', async () => {
        await expect(part2(filePath + 'real.txt')).resolves.toStrictEqual(195292);
    });
});