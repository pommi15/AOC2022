import { Day } from "../interfaces/day";

export class Day9 extends Day {
  constructor(filePath: string) {
    super(filePath);
  }

  public part1(): number {
    const moves: Move[] = this.data.map((n) => {
      const split = n.split(" ");
      return { dir: split[0], count: Number(split[1]) };
    });
    let currentH: Position = { x: 0, y: 0 };
    let currentT: Position = { x: 0, y: 0 };
    const hPoses: Position[] = [currentT];
    for (const move of moves) {
      for (let i = 0; i < move.count; i++) {
        currentH = this.moveH(currentH, move.dir);
        if (!this.areWithinOne(currentH, currentT)) {
          currentT = this.adjustT(currentH, move.dir);
          hPoses.push(currentT);
        }
      }
    }

    return Array.from(new Set(hPoses.map((n) => JSON.stringify(n)))).map((n) =>
      JSON.parse(n)
    ).length;
  }

  public part2(): number {
    return 0;
  }

  private moveH(p: Position, dir: string): Position {
    if (dir === "U") {
      return { x: p.x, y: (p.y += 1) };
    } else if (dir === "D") {
      return { x: p.x, y: (p.y -= 1) };
    } else if (dir === "R") {
      return { x: p.x + 1, y: p.y };
    } else if (dir === "L") {
      return { x: p.x - 1, y: p.y };
    }
    return { x: 200000, y: 200000 };
  }

  private areWithinOne(a: Position, b: Position) {
    return (
      (a.x === b.x || a.x === b.x - 1 || a.x === b.x + 1) &&
      (a.y === b.y || a.y === b.y - 1 || a.y === b.y + 1)
    );
  }

  private adjustT(currentH: Position, dir: string): Position {
    if (dir === "U") {
      return { x: currentH.x, y: currentH.y - 1 };
    } else if (dir === "D") {
      return { x: currentH.x, y: currentH.y + 1 };
    } else if (dir === "R") {
      return { x: currentH.x - 1, y: currentH.y };
    } else if (dir === "L") {
      return { x: currentH.x + 1, y: currentH.y };
    }
    return { x: 100000, y: 100000 };
  }
}
interface Move {
  dir: string;
  count: number;
}

interface Position {
  x: number;
  y: number;
}
