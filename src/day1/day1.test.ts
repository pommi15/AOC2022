import { Day1 } from "./day1";

const filePath = "./src/day1/inputs/";

describe("day1", () => {
  describe("test1 data", () => {
    const day1 = new Day1(filePath + "test1.txt");
    beforeAll((done) => {
      day1.readData().then(() => done());
    });

    it("should do test1 correctly", async () => {
      expect(day1.part1()).toBe(24000);
    });
    it("should do test1 correctly", async () => {
      expect(day1.part2()).toBe(45000);
    });
  });

  describe("test2 data", () => {
    const day1 = new Day1(filePath + "test2.txt");
    beforeAll((done) => {
      day1.readData().then(() => done());
    });

    it("should do test2 correctly", async () => {
      expect(day1.part1()).toBe(46);
    });
    it("should do test2 correctly", async () => {
      expect(day1.part2()).toBe(67);
    });
  });

  describe("real data", () => {
    const day1 = new Day1(filePath + "real.txt");
    beforeAll((done) => {
      day1.readData().then(() => done());
    });

    it("should do real correctly", async () => {
      expect(day1.part1()).toBe(66306);
    });
    it("should do real correctly", async () => {
      expect(day1.part2()).toBe(195292);
    });
  });
});
