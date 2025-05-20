"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NodeElement {
    constructor(val) {
        this.addChild = (ele) => {
            this.children.push(ele);
        };
        this.removeChild = (ele) => {
            this.children = this.children.filter((item) => item != ele);
        };
        this.print = (depth = 1) => {
            if (depth == 1)
                console.log(this.val);
            this.children.forEach((child) => {
                console.log(Array(depth)
                    .fill("")
                    .map((_) => ` |`)
                    .join("") + `-${child.val}`);
                child.print(depth + 1);
            });
        };
        this.children = [];
        this.val = val;
    }
}
exports.default = NodeElement;
