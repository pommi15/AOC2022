import { Day8 } from "./day8";

const filePath = "./src/day8/inputs/";

describe("day8", () => {
  describe("test1 data", () => {
    const day8 = new Day8(filePath + "test1.txt");
    beforeAll((done) => {
      day8.readData().then(() => done());
    });

    it("should do test1 correctly", async () => {
      expect(day8.part1()).toBe(21);
    });
    it("should do test1 correctly", async () => {
      expect(day8.part2()).toBe(8);
    });
  });

  describe("test2 data", () => {
    const day8 = new Day8(filePath + "test2.txt");
    beforeAll((done) => {
      day8.readData().then(() => done());
    });

    it("should do test2 correctly", async () => {
      expect(day8.part1()).toBe(18);
    });
    it("should do test2 correctly", async () => {
      expect(day8.part2()).toBe(6);
    });
  });

  describe("real data", () => {
    const day8 = new Day8(filePath + "real.txt");
    beforeAll((done) => {
      day8.readData().then(() => done());
    });

    it("should do real correctly", async () => {
      expect(day8.part1()).toBe(1688);
    });
    it("should do real correctly", async () => {
      expect(day8.part2()).toBe(410400);
    });
  });
});
