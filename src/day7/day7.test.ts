import { Day7 } from "./day7";

const filePath = "./src/day7/inputs/";

describe("day7", () => {
  describe("test1 data", () => {
    const day7 = new Day7(filePath + "test1.txt");
    beforeAll((done) => {
      day7.readData().then(() => done());
    });

    it("should do test1 correctly", async () => {
      expect(day7.part1()).toBe(95437);
    });
    it("should do test1 correctly", async () => {
      expect(day7.part2()).toBe(24933642);
    });
  });

  describe("test2 data", () => {
    const day7 = new Day7(filePath + "test2.txt");
    beforeAll((done) => {
      day7.readData().then(() => done());
    });

    it("should do test2 correctly", async () => {
      expect(day7.part1()).toBe(10);
    });
  });
  describe("test3 data", () => {
    const day7 = new Day7(filePath + "test3.txt");
    beforeAll((done) => {
      day7.readData().then(() => done());
    });

    it("should do test3 correctly", async () => {
      expect(day7.part1()).toBe(20);
    });
  });

  describe("real data", () => {
    const day7 = new Day7(filePath + "real.txt");
    beforeAll((done) => {
      day7.readData().then(() => done());
    });

    it("should do real correctly", async () => {
      expect(day7.part1()).toBe(1348005);
    });
    it("should do real correctly", async () => {
      expect(day7.part2()).toBe(12785886);
    });
  });
});
