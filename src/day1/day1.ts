import fs from "fs";

export class Day1 {
  private data: string[] = [];
  constructor(private filePath: string) {}

  public readData(): Promise<void> {
    return new Promise((res, rej) => {
      fs.readFile(this.filePath, "utf8", (err: any, d: string) => {
        if (err) {
          return rej(err);
        }
        this.data = d.split(/\r?\n/);
        res();
      });
    });
  }

  public part1(): number {
    let counter: number = 0;
    const elves: number[] = [];
    for (const n of this.data) {
      const num = Number(n);
      if (num) {
        counter += num;
      } else {
        elves.push(counter);
        counter = 0;
      }
    }
    elves.push(counter);
    const finalElves = elves.sort((a, b) => b - a);
    return finalElves[0];
  }

  public part2(): number {
    let counter: number = 0;
    const elves: number[] = [];
    for (const n of this.data) {
      const num = Number(n);
      if (num) {
        counter += num;
      } else {
        elves.push(counter);
        counter = 0;
      }
    }
    elves.push(counter);
    const finalElves = elves.sort((a, b) => b - a);
    return finalElves[0] + finalElves[1] + finalElves[2];
  }
}
