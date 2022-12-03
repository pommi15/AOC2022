import { Day1 } from "./day1";

const filePath = "./src/day1/inputs/";

describe("day1", () => {
  describe("test1 data", () => {
    const day1 = new Day1(filePath + "test1.txt");
    beforeAll((done) => {
      day1.readData().then(() => done());
    });

    it("should do test1 correctly", async () => {
      expect(day1.part1()).toStrictEqual(24000);
    });
    it("should do test1 correctly", async () => {
      expect(day1.part2()).toStrictEqual(45000);
    });
  });

  describe("test2 data", () => {
    const day1 = new Day1(filePath + "test2.txt");
    beforeAll((done) => {
      day1.readData().then(() => done());
    });

    it("should do test2 correctly", async () => {
      expect(day1.part1()).toStrictEqual(46);
    });
    it("should do test2 correctly", async () => {
      expect(day1.part2()).toStrictEqual(67);
    });
  });

  describe("real data", () => {
    const day1 = new Day1(filePath + "real.txt");
    beforeAll((done) => {
      day1.readData().then(() => done());
    });

    it("should do real correctly", async () => {
      expect(day1.part1()).toStrictEqual(66306);
    });
    it("should do real correctly", async () => {
      expect(day1.part2()).toStrictEqual(195292);
    });
  });
});
