import { Day } from "../interfaces/day";

export class Day3 extends Day {
  constructor(filePath: string) {
    super(filePath);
  }

  public part1(): number {
    const samers: string[] = [];
    for (const line of this.data) {
      const [left, right] = this.getHalves(line);
      for (let i = 0; i < left.length; i++) {
        if (right.includes(left[i])) {
          samers.push(left[i]);
        }
      }
    }
    return samers.reduce((p, c) => p + this.getCharVal(c), 0);
  }
  public part2(): number {
    const backPacks: string[][] = [];
    for (let i = 0; i < this.data.length; i += 3) {
      const left = this.removeDoubles(this.data[i]);
      const middle = this.removeDoubles(this.data[i + 1]);
      const right = this.removeDoubles(this.data[i + 2]);
      backPacks.push([left, middle, right].sort((a, b) => b.length - a.length));
    }
    return backPacks.reduce((p, c) => {
      const [left, middle, right] = c;
      for (let i = 0; i < left.length; i++) {
        if (middle.includes(left[i]) && right.includes(left[i])) {
          return p + this.getCharVal(left[i]);
        }
      }
      return p;
    }, 0);
  }

  private getHalves(line: string): string[] {
    const left = this.removeDoubles(line.slice(0, line.length / 2));
    const right = this.removeDoubles(line.slice(line.length / 2));
    return [left, right];
  }

  private removeDoubles(str: string): string {
    return str
      .split("")
      .filter((value, index, self) => {
        return self.indexOf(value) === index;
      })
      .join("");
  }

  private getCharVal(char: string) {
    if (char === char.toLocaleUpperCase()) {
      return char.charCodeAt(0) - 64 + 26;
    } else if (char === char.toLocaleLowerCase()) {
      return char.charCodeAt(0) - 96;
    }
    return 0;
  }
}
