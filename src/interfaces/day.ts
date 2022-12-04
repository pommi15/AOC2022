import fs from "fs";

export abstract class Day {
  protected data: string[] = [];
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
}
