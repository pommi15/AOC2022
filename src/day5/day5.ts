import { Day } from "../interfaces/day";

export class Day5 extends Day {
  constructor(filePath: string) {
    super(filePath);
  }

  public part1(): string {
    const { board, boardWidth } = this.parseBoard();

    const instructions: Instruction[] = this.parseInstructions();

    for (const instruction of instructions) {
      const count = instruction.count;
      const from = instruction.from - 1;
      const to = instruction.to - 1;
      const toMove = board[from].split("").slice(-count).reverse().join("");
      board[from] = board[from].slice(0, -count);
      board[to] += toMove;
    }

    return board.reduce((p, c) => p + c.slice(-1), "");
  }
  public part2(): string {
    const { board, boardWidth } = this.parseBoard();

    const instructions: Instruction[] = this.parseInstructions();

    for (const instruction of instructions) {
      const count = instruction.count;
      const from = instruction.from - 1;
      const to = instruction.to - 1;
      const toMove = board[from].split("").slice(-count).join("");
      board[from] = board[from].slice(0, -count);
      board[to] += toMove;
    }

    return board.reduce((p, c) => p + c.slice(-1), "");
  }
  private parseBoard(): { board: string[]; boardWidth: number } {
    let rawBoard: string[] = [];
    let boardWidth: number = 0;
    for (const line of this.data) {
      if (line.slice(0, 2) === " 1") {
        boardWidth = Number(line[line.length - 2]);
        break;
      }
      const splitLine: string[] = line.split("");
      for (let i = 0; i < splitLine.length; i += 4) {
        rawBoard.push(splitLine.slice(i + 1, i + 2)[0]);
      }
    }
    let board: string[] = Array(boardWidth).join(".").split(".");
    for (let i = 0; i < rawBoard.length; i++) {
      if (rawBoard[i] !== " ") {
        board[i % boardWidth] += rawBoard[i];
      }
    }
    return {
      board: board.map((n) => n.split("").reverse().join("")),
      boardWidth: boardWidth,
    };
  }
  private parseInstructions(): Instruction[] {
    const instructions: Instruction[] = [];
    for (const line of this.data) {
      if (line.slice(0, 4) === "move") {
        const split = line.split(" ");
        instructions.push({
          count: Number(split[1]),
          from: Number(split[3]),
          to: Number(split[5]),
        });
      }
    }
    return instructions;
  }
}

interface Instruction {
  count: number;
  from: number;
  to: number;
}
