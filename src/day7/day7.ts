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
    const total = 70000000;
    const needed = 30000000;
    const tree = this.parseTree();
    const used = this.getNodeSize(tree);
    const needToFree = needed - (total - used);
    const sortedSizes = this.getListOfNodeSizes(tree).sort(
      (a: number, b: number) => a - b
    );
    return sortedSizes.find((n) => n > needToFree) || 0;
  }

  private parseTree(): Node {
    let current: Node = { name: "/", children: [], parent: null, filesSize: 0 };
    for (const line of this.data.filter((n) => !n.startsWith("$ ls"))) {
      if (line.startsWith("$ cd")) {
        if (line.includes("..")) {
          if (current.parent) {
            current = current.parent || null;
          }
        } else {
          const name = line.split(" ")[2];
          const newNode = current.children.find((n) => n.name === name);
          if (newNode) {
            current = newNode;
          }
        }
      } else if (line.startsWith("dir")) {
        const name = line.split(" ")[1];
        current.children.push({
          name,
          parent: current,
          children: [],
          filesSize: 0,
        });
      } else {
        const fileSize = Number(line.split(" ")[0]);
        current.filesSize += fileSize;
      }
    }
    let tree: Node = current;
    while (tree.parent) {
      tree = tree.parent;
    }

    return tree;
  }

  private getFoldersOverX(node: Node, x: number): number {
    return node.children.reduce(
      (p, c): number => {
        return p + this.getFoldersOverX(c, x);
      },
      this.getNodeSize(node) > x ? 0 : this.getNodeSize(node)
    );
  }

  private getNodeSize(node: Node): number {
    return node.children.reduce(
      (p, c) => p + this.getNodeSize(c),
      node.filesSize
    );
  }

  private getListOfNodeSizes(node: Node): number[] {
    return [
      this.getNodeSize(node),
      ...node.children.reduce(
        (p, c) => p.concat(this.getListOfNodeSizes(c)),
        [] as number[]
      ),
    ];
  }
}

interface Node {
  name: string;
  children: Node[];
  parent: Node | null;
  filesSize: number;
}
