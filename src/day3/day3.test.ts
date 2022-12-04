import { Day3 } from "./day3";

const filePath = "./src/day3/inputs/";

describe("day3", () => {
  describe("test1 data", () => {
    const day1 = new Day3(filePath + "test1.txt");
    beforeAll((done) => {
      day1.readData().then(() => done());
    });

    it("should do test1 correctly", async () => {
      expect(day1.part1()).toStrictEqual(157);
    });
    it("should do test1 correctly", async () => {
      expect(day1.part2()).toStrictEqual(70);
    });
  });

  describe("test2 data", () => {
    const day1 = new Day3(filePath + "test2.txt");
    beforeAll((done) => {
      day1.readData().then(() => done());
    });

    it("should do test2 correctly", async () => {
      expect(day1.part1()).toStrictEqual(44);
    });
    it("should do test2 correctly", async () => {
      expect(day1.part2()).toStrictEqual(1);
    });
  });

  describe("real data", () => {
    const day1 = new Day3(filePath + "real.txt");
    beforeAll((done) => {
      day1.readData().then(() => done());
    });

    it("should do real correctly", async () => {
      expect(day1.part1()).toStrictEqual(7872);
    });
    it("should do real correctly", async () => {
      expect(day1.part2()).toStrictEqual(2497);
    });
  });
});
