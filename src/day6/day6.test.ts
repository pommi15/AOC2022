import { Day6 } from "./day6";

const filePath = "./src/day6/inputs/";

describe("day6", () => {
  describe("test1 data", () => {
    const day6 = new Day6(filePath + "test1.txt");
    beforeAll((done) => {
      day6.readData().then(() => done());
    });

    it("should do test1 correctly", async () => {
      expect(day6.part1()).toBe(5);
    });
    it("should do test1 correctly", async () => {
      expect(day6.part2()).toBe(23);
    });
  });

  describe("test2 data", () => {
    const day6 = new Day6(filePath + "test2.txt");
    beforeAll((done) => {
      day6.readData().then(() => done());
    });

    it("should do test2 correctly", async () => {
      expect(day6.part1()).toBe(6);
    });
    it("should do test2 correctly", async () => {
      expect(day6.part2()).toBe(23);
    });
  });

  describe("test3 data", () => {
    const day6 = new Day6(filePath + "test3.txt");
    beforeAll((done) => {
      day6.readData().then(() => done());
    });

    it("should do test3 correctly", async () => {
      expect(day6.part1()).toBe(10);
    });
    it("should do test3 correctly", async () => {
      expect(day6.part2()).toBe(29);
    });
  });

  describe("test4 data", () => {
    const day6 = new Day6(filePath + "test4.txt");
    beforeAll((done) => {
      day6.readData().then(() => done());
    });

    it("should do test4 correctly", async () => {
      expect(day6.part1()).toBe(11);
    });
    it("should do test4 correctly", async () => {
      expect(day6.part2()).toBe(26);
    });
  });

  describe("real data", () => {
    const day6 = new Day6(filePath + "real.txt");
    beforeAll((done) => {
      day6.readData().then(() => done());
    });

    it("should do real correctly", async () => {
      expect(day6.part1()).toBe(1034);
    });
    it("should do real correctly", async () => {
      expect(day6.part2()).toBe(2472);
    });
  });
});
