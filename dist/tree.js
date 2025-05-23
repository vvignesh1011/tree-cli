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
        this.getStructure = (callBack, depth = 1) => {
            if (depth == 1)
                callBack === null || callBack === void 0 ? void 0 : callBack(this.val);
            this.children.forEach((child) => {
                callBack === null || callBack === void 0 ? void 0 : callBack(Array(depth)
                    .fill("")
                    .map((_) => ` |`)
                    .join("") + `-${child.val}`);
                child.getStructure(callBack, depth + 1);
            });
        };
        this.children = [];
        this.val = val;
    }
}
exports.default = NodeElement;
