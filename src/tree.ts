class NodeElement {
  val: string;
  children: NodeElement[];

  constructor(val: string) {
    this.children = [];
    this.val = val;
  }

  addChild = (ele: NodeElement) => {
    this.children.push(ele);
  };

  removeChild = (ele: NodeElement) => {
    this.children = this.children.filter((item) => item != ele);
  };

  print = (depth = 1) => {
    if (depth == 1) console.log(this.val);
    this.children.forEach((child) => {
      console.log(
        Array(depth)
          .fill("")
          .map((_) => ` |`)
          .join("") + `-${child.val}`
      );
      child.print(depth + 1);
    });
  };
}

export default NodeElement;
