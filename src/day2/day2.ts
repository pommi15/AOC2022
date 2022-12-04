import fs from "fs";
import { Day } from "../interfaces/day";

export class Day2 extends Day {
  constructor(filePath: string) {
    super(filePath);
  }

  public part1(): number {
    let sum: number = 0;
    for (const n of this.data) {
      const split: string[] = n.split(" ");
      const oppo: string = split[0];
      const me: string = split[1];
      if (me === "X") {
        // Rock
        sum += 1 + this.imRock(oppo);
      } else if (me === "Y") {
        // Paper
        sum += 2 + this.imPaper(oppo);
      } else if (me === "Z") {
        // Scissors
        sum += 3 + this.imScissors(oppo);
      }
    }
    return sum;
  }
  public part2(): number {
    let sum: number = 0;
    for (const n of this.data) {
      const split: string[] = n.split(" ");
      const oppo: string = split[0];
      const res: string = split[1];
      if (oppo === "A") {
        // Rock
        sum += this.hesRock(res);
      } else if (oppo === "B") {
        // Paper
        sum += this.hesPaper(res);
      } else if (oppo === "C") {
        // Scissors
        sum += this.hesScissors(res);
      }
    }
    return sum;
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
