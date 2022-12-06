import { Day5 } from "./day5";

const filePath = "./src/day5/inputs/";

describe("day5", () => {
  describe("test1 data", () => {
    const day5 = new Day5(filePath + "test1.txt");
    beforeAll((done) => {
      day5.readData().then(() => done());
    });

    it("should do test1 correctly", async () => {
      expect(day5.part1()).toBe("CMZ");
    });
    it("should do test1 correctly", async () => {
      expect(day5.part2()).toBe("MCD");
    });
  });

  describe("test2 data", () => {
    const day5 = new Day5(filePath + "test2.txt");
    beforeAll((done) => {
      day5.readData().then(() => done());
    });

    it("should do test2 correctly", async () => {
      expect(day5.part1()).toBe("DMY");
    });
    it("should do test2 correctly", async () => {
      expect(day5.part2()).toBe("DYM");
    });
  });

  describe("real data", () => {
    const day5 = new Day5(filePath + "real.txt");
    beforeAll((done) => {
      day5.readData().then(() => done());
    });

    it("should do real correctly", async () => {
      expect(day5.part1()).toBe("ZWHVFWQWW");
    });
    it("should do real correctly", async () => {
      expect(day5.part2()).toBe("HZFZCCWWV");
    });
  });
});
