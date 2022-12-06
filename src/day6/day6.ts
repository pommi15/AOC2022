import { Day } from "../interfaces/day";

export class Day6 extends Day {
  constructor(filePath: string) {
    super(filePath);
  }

  public part1(): number {
    return this.findXDifferent(4);
  }
  public part2(): number {
    return this.findXDifferent(14);
  }

  private findXDifferent(x: number) {
    const data = this.data[0];
    for (let i = 0; i < data.length - x; i++) {
      const lookAt = data.slice(i, i + x);
      if (this.removeDoubles(lookAt).length === x) {
        return i + x;
      }
    }
    return 1;
  }

  private removeDoubles(str: string): string {
    return str
      .split("")
      .filter(function (v, i, self) {
        return self.indexOf(v) === i;
      })
      .join("");
  }
}
