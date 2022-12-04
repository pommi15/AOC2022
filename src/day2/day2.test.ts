import { Day2 } from "./day2";

const filePath = "./src/day2/inputs/";

describe("day2", () => {
  describe("test1 data", () => {
    const day1 = new Day2(filePath + "test1.txt");
    beforeAll((done) => {
      day1.readData().then(() => done());
    });

    it("should do test1 correctly", async () => {
      expect(day1.part1()).toBe(15);
    });
    it("should do test1 correctly", async () => {
      expect(day1.part2()).toBe(12);
    });
  });

  describe("test2 data", () => {
    const day1 = new Day2(filePath + "test2.txt");
    beforeAll((done) => {
      day1.readData().then(() => done());
    });

    it("should do test2 correctly", async () => {
      expect(day1.part1()).toBe(45);
    });
    it("should do test2 correctly", async () => {
      expect(day1.part2()).toBe(45);
    });
  });

  describe("real data", () => {
    const day1 = new Day2(filePath + "real.txt");
    beforeAll((done) => {
      day1.readData().then(() => done());
    });

    it("should do real correctly", async () => {
      expect(day1.part1()).toBe(9241);
    });
    it("should do real correctly", async () => {
      expect(day1.part2()).toBe(14610);
    });
  });
});
