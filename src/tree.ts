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

  getStructure = (callBack?: (val: string) => void, depth = 1) => {
    if (depth == 1) callBack?.(this.val);
    this.children.forEach((child) => {
      callBack?.(
        Array(depth)
          .fill("")
          .map((_) => ` |`)
          .join("") + `-${child.val}`
      );
      child.getStructure(callBack, depth + 1);
    });
  };
}

export default NodeElement;
