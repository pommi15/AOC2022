import { Day } from "../interfaces/day";

export class Day8 extends Day {
  constructor(filePath: string) {
    super(filePath);
  }

  public part1(): number {
    const board = this.parseBoard();
    const isFreeBoard = board.map((y, i) => {
      return y.map((_, j) => {
        return this.anyFree(board, j, i);
      });
    });

    return isFreeBoard.reduce((pY, cY) => {
      return pY + cY.reduce((pX, cX) => pX + (cX ? 1 : 0), 0);
    }, 0);
  }

  private parseBoard(): number[][] {
    return this.data.map((y) => {
      return y.split("").map((x) => {
        return Number(x);
      });
    });
  }
  public part2(): number {
    const board = this.parseBoard();
    return board
      .map((arr, y) => {
        return arr.map((_, x) => {
          return this.trees2See(board, x, y);
        });
      })
      .reduce((pY, cY) => {
        return Math.max(
          pY,
          cY.reduce((pX, cX) => Math.max(pX, cX), 0)
        );
      }, 0);
  }

  private northFree(board: number[][], x: number, y: number): boolean {
    for (let i = y - 1; i >= 0; i--) {
      if (board[i][x] >= board[y][x]) {
        return false;
      }
    }
    return true;
  }
  private southFree(board: number[][], x: number, y: number): boolean {
    for (let i = y + 1; i < board[0].length; i++) {
      if (board[i][x] >= board[y][x]) {
        return false;
      }
    }
    return true;
  }

  private westFree(board: number[][], x: number, y: number): boolean {
    for (let i = x - 1; i >= 0; i--) {
      if (board[y][i] >= board[y][x]) {
        return false;
      }
    }
    return true;
  }
  private eastFree(board: number[][], x: number, y: number): boolean {
    for (let i = x + 1; i < board[0].length; i++) {
      if (board[y][i] >= board[y][x]) {
        return false;
      }
    }
    return true;
  }

  private anyFree(board: number[][], x: number, y: number): boolean {
    return (
      this.northFree(board, x, y) ||
      this.southFree(board, x, y) ||
      this.westFree(board, x, y) ||
      this.eastFree(board, x, y)
    );
  }

  private treesNorth(board: number[][], x: number, y: number): number {
    let count = 0;
    for (let i = y - 1; i >= 0; i--) {
      count++;
      if (board[i][x] >= board[y][x]) {
        return count;
      }
    }
    return count;
  }
  private treesSouth(board: number[][], x: number, y: number): number {
    let count = 0;
    for (let i = y + 1; i < board.length; i++) {
      count++;
      if (board[i][x] >= board[y][x]) {
        return count;
      }
    }
    return count;
  }
  private treesWest(board: number[][], x: number, y: number): number {
    let count = 0;
    for (let i = x - 1; i >= 0; i--) {
      count++;
      if (board[y][i] >= board[y][x]) {
        return count;
      }
    }
    return count;
  }
  private treesEast(board: number[][], x: number, y: number): number {
    let count = 0;
    for (let i = x + 1; i < board[0].length; i++) {
      count++;
      if (board[y][i] >= board[y][x]) {
        return count;
      }
    }
    return count;
  }

  private trees2See(board: number[][], x: number, y: number): number {
    return (
      this.treesNorth(board, x, y) *
      this.treesSouth(board, x, y) *
      this.treesWest(board, x, y) *
      this.treesEast(board, x, y)
    );
  }
}
