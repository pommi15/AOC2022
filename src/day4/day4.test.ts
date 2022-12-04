import { Day4 } from "./day4";

const filePath = "./src/day4/inputs/";

describe("day4", () => {
  describe("test1 data", () => {
    const day1 = new Day4(filePath + "test1.txt");
    beforeAll((done) => {
      day1.readData().then(() => done());
    });

    it("should do test1 correctly", async () => {
      expect(day1.part1()).toBe(0);
    });
    it("should do test1 correctly", async () => {
      expect(day1.part2()).toBe(0);
    });
  });

  describe("test2 data", () => {
    const day1 = new Day4(filePath + "test2.txt");
    beforeAll((done) => {
      day1.readData().then(() => done());
    });

    it("should do test2 correctly", async () => {
      expect(day1.part1()).toBe(0);
    });
    it("should do test2 correctly", async () => {
      expect(day1.part2()).toBe(0);
    });
  });

  describe("real data", () => {
    const day1 = new Day4(filePath + "real.txt");
    beforeAll((done) => {
      day1.readData().then(() => done());
    });

    it("should do real correctly", async () => {
      expect(day1.part1()).toBe(0);
    });
    it("should do real correctly", async () => {
      expect(day1.part2()).toBe(0);
    });
  });
});
