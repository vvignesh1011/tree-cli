"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFolderStructure = void 0;
const tree_1 = __importDefault(require("./tree"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const getFolderStructure = (dirPath, rootNode) => {
    let files = fs_1.default.readdirSync(dirPath, { encoding: "utf-8" });
    let rootFolderName = path_1.default.basename(dirPath);
    let rootFolder = rootNode || new tree_1.default(rootFolderName);
    files.forEach((item) => {
        let folder = new tree_1.default(item);
        let isDir = fs_1.default.lstatSync(path_1.default.join(dirPath, item)).isDirectory();
        if (isDir)
            (0, exports.getFolderStructure)(path_1.default.join(dirPath, item), folder);
        rootFolder.addChild(folder);
    });
    return rootFolder;
};
exports.getFolderStructure = getFolderStructure;
