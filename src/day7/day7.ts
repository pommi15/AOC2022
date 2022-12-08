import { Day } from "../interfaces/day";

export class Day7 extends Day {
  constructor(filePath: string) {
    super(filePath);
  }

  public part1(): number {
    const tree = this.parseTree();
    return this.getFoldersOverX(tree, 100000);
  }
  public part2(): number {
    return 0;
  }

  private parseTree(): Node {
    const nodes: any[] = [];
    let currentFolders: string[] = [];
    let currentFileSize: number = 0;
    for (const line of this.data
      .filter((n) => !n.startsWith("$ ls") && !n.startsWith("$ cd .."))
      .reverse()) {
      if (line.startsWith("dir")) {
        currentFolders.push(line.split(" ")[1]);
      } else if (line.startsWith("$")) {
        nodes.push({
          name: line.split(" ")[2],
          folders: currentFolders,
          filesSize: currentFileSize,
        });
        currentFolders = [];
        currentFileSize = 0;
      } else {
        currentFileSize += Number(line.split(" ")[0]);
      }
    }
    const root = nodes[nodes.length - 1];
    return this.buildTree(root, nodes);
  }

  private buildTree(current: Node, nodes: any[]): Node {
    return {
      name: current.name,
      filesSize: current.filesSize,
      folders: current.folders.map((n) => {
        const newNode = nodes.find((m) => m.name === n);
        if (newNode) {
          return this.buildTree(newNode, nodes);
        }
        return { name: "shit", filesSize: 0, folders: [] };
      }),
    };
  }

  private getFoldersOverX(node: Node, x: number): number {
    if (this.getNodeSize(node) > x) {
      return node.folders.reduce((p, c) => p + this.getFoldersOverX(c, x), 0);
    }
    return (
      this.getNodeSize(node) +
      node.folders.reduce((p, c) => p + this.getFoldersOverX(c, x), 0)
    );
  }

  private getNodeSize(node: Node): number {
    return (
      node.filesSize + node.folders.reduce((p, c) => p + this.getNodeSize(c), 0)
    );
  }
}

interface Node {
  name: string;
  folders: Node[];
  filesSize: number;
}
