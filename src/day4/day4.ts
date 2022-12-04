import { Day } from "../interfaces/day";

export class Day4 extends Day {
  constructor(filePath: string) {
    super(filePath);
  }

  public part1(): number {
    const pairs: RangePair[] = this.makeRangePairs();

    return pairs.filter((n) => this.eitherContainedInOther(n.left, n.right))
      .length;
  }
  public part2(): number {
    const pairs: RangePair[] = this.makeRangePairs();
    return pairs.filter((n) => this.overLapAtAll(n.left, n.right)).length;
  }

  private eitherContainedInOther(a: Range, b: Range): boolean {
    return this.rangeContainedInRange(a, b) || this.rangeContainedInRange(b, a);
  }

  private rangeContainedInRange(a: Range, b: Range): boolean {
    return a.start <= b.start && a.end >= b.end;
  }

  private overLapAtAll(a: Range, b: Range): boolean {
    return b.start <= a.start ? b.end >= a.start : b.start <= a.end;
  }

  private makeRangePairs(): RangePair[] {
    return this.data.map((n) => {
      const leftRightSplit = n.split(",");
      const leftSplit = leftRightSplit[0].split("-");
      const rightSplit = leftRightSplit[1].split("-");
      return {
        left: {
          start: Number(leftSplit[0]),
          end: Number(leftSplit[1]),
        },
        right: {
          start: Number(rightSplit[0]),
          end: Number(rightSplit[1]),
        },
      };
    });
  }
}

interface Range {
  start: number;
  end: number;
}

interface RangePair {
  left: Range;
  right: Range;
}
