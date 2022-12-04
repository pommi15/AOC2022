import fs from "fs";
import { Day } from "../interfaces/day";

export class Day1 extends Day {
  constructor(filePath: string) {
    super(filePath);
  }

  public part1(): number {
    const finalElves = this.createFinalElves();
    return finalElves[0];
  }

  public part2(): number {
    const finalElves = this.createFinalElves();
    return finalElves.filter((_, i) => i < 3).reduce((p, c) => p + c, 0);
  }

  private createFinalElves(): number[] {
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
    return elves.sort((a, b) => b - a);
  }
}
