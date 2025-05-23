#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const commander_1 = require("commander");
const path_1 = __importDefault(require("path"));
const folderUtil_1 = require("./folderUtil");
const program = new commander_1.Command();
program.option("-r, --root <path>", "base/root folder");
program.option("-o, --omit <path...>", "omit the folder or file");
program.option("--out <path>", "write the output to file");
program.parse(process.argv);
const options = program.opts();
let baseDir = options.root ? path_1.default.resolve(options.root) : process.cwd();
let omitFolders = options.omit;
const rootFolder = (0, folderUtil_1.getFolderStructure)(baseDir);
if (omitFolders) {
    omitFolders.forEach((value) => {
        let omit = path_1.default.resolve(value);
        let targets = path_1.default.relative(baseDir, omit).split(path_1.default.sep);
        let parentNode = rootFolder;
        let targetNode;
        for (let i = 0; i < targets.length; i++) {
            if (targetNode)
                parentNode = targetNode;
            targetNode = parentNode === null || parentNode === void 0 ? void 0 : parentNode.children.find((child) => child.val == targets[i]);
        }
        if (parentNode && targetNode)
            parentNode.removeChild(targetNode);
    });
}
let outputFilePath = options.out && path_1.default.resolve(options.out);
let writeStream = fs_1.default.createWriteStream(outputFilePath || "out.txt");
rootFolder.getStructure((val) => {
    console.log(val);
    if (outputFilePath)
        return writeStream.write(val + "\n");
});
