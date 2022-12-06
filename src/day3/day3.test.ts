import { Day3 } from "./day3";

const filePath = "./src/day3/inputs/";

describe("day3", () => {
  describe("test1 data", () => {
    const day3 = new Day3(filePath + "test1.txt");
    beforeAll((done) => {
      day3.readData().then(() => done());
    });

    it("should do test1 correctly", async () => {
      expect(day3.part1()).toBe(157);
    });
    it("should do test1 correctly", async () => {
      expect(day3.part2()).toBe(70);
    });
  });

  describe("test2 data", () => {
    const day3 = new Day3(filePath + "test2.txt");
    beforeAll((done) => {
      day3.readData().then(() => done());
    });

    it("should do test2 correctly", async () => {
      expect(day3.part1()).toBe(44);
    });
    it("should do test2 correctly", async () => {
      expect(day3.part2()).toBe(1);
    });
  });

  describe("real data", () => {
    const day3 = new Day3(filePath + "real.txt");
    beforeAll((done) => {
      day3.readData().then(() => done());
    });

    it("should do real correctly", async () => {
      expect(day3.part1()).toBe(7872);
    });
    it("should do real correctly", async () => {
      expect(day3.part2()).toBe(2497);
    });
  });
});
