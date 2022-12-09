import { Day9 } from "./day9";

const filePath = "./src/day9/inputs/";

describe("day9", () => {
  describe("test1 data", () => {
    const day9 = new Day9(filePath + "test1.txt");
    beforeAll((done) => {
      day9.readData().then(() => done());
    });

    it("should do test1 correctly", async () => {
      expect(day9.part1()).toBe(13);
    });
    // it("should do test1 correctly", async () => {
    //   expect(day9.part2()).toBe(8);
    // });
  });

  // describe("test2 data", () => {
  //   const day9 = new Day9(filePath + "test2.txt");
  //   beforeAll((done) => {
  //     day9.readData().then(() => done());
  //   });

  //   it("should do test2 correctly", async () => {
  //     expect(day9.part1()).toBe(18);
  //   });
  //   it("should do test2 correctly", async () => {
  //     expect(day9.part2()).toBe(6);
  //   });
  // });

  describe("real data", () => {
    const day9 = new Day9(filePath + "real.txt");
    beforeAll((done) => {
      day9.readData().then(() => done());
    });

    it("should do real correctly", async () => {
      expect(day9.part1()).toBe(0);
    });
    // it("should do real correctly", async () => {
    //   expect(day9.part2()).toBe(410400);
    // });
  });
});
