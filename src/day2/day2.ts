import fs from "fs";
import { Day } from "../interfaces/day";

export class Day2 extends Day {
  constructor(filePath: string) {
    super(filePath);
  }

  public part1(): number {
    let sum: number = 0;
    for (const line of this.data) {
      const [op, me] = this.getThrows(line);
      if (me === "X") {
        sum += 1 + this.imRock(op);
      } else if (me === "Y") {
        sum += 2 + this.imPaper(op);
      } else if (me === "Z") {
        sum += 3 + this.imScissors(op);
      }
    }
    return sum;
  }
  public part2(): number {
    let sum: number = 0;
    for (const line of this.data) {
      const [op, res] = this.getThrows(line);
      if (op === "A") {
        sum += this.hesRock(res);
      } else if (op === "B") {
        sum += this.hesPaper(res);
      } else if (op === "C") {
        sum += this.hesScissors(res);
      }
    }
    return sum;
  }

  private getThrows(line: string): string[] {
    const split: string[] = line.split(" ");
    return [split[0], split[1]];
  }

  private imRock(op: string) {
    if (op === "A") {
      // Rock
      return 3;
    } else if (op === "C") {
      // Scissors
      return 6;
    }
    return 0;
  }

  private imPaper(op: string) {
    if (op === "A") {
      // Rock
      return 6;
    } else if (op === "B") {
      // Paper
      return 3;
    }
    return 0;
  }

  private imScissors(op: string) {
    if (op === "B") {
      // Paper
      return 6;
    } else if (op === "C") {
      // Scissors
      return 3;
    }
    return 0;
  }

  private hesRock(res: string) {
    if (res === "X") {
      return 0 + 3;
    } else if (res === "Y") {
      return 3 + 1;
    }
    return 6 + 2;
  }

  private hesPaper(res: string) {
    if (res === "X") {
      return 0 + 1;
    } else if (res === "Y") {
      return 3 + 2;
    }
    return 6 + 3;
  }

  private hesScissors(res: string) {
    if (res === "X") {
      return 0 + 2;
    } else if (res === "Y") {
      return 3 + 3;
    }
    return 6 + 1;
  }
}
