#!/usr/bin/env node

import { Command } from "commander";
import path from "path";
import { getFolderStructure } from "./folderUtil";
import NodeElement from "./tree";

const program = new Command();
program.option("-r, --root <path>", "base/root folder");
program.option("-o, --omit <path...>", "omit the folder or file");
program.parse(process.argv);

const options = program.opts();
let baseDir = options.root ? path.resolve(options.root) : process.cwd();

let omitFolders = options.omit;
const rootFolder = getFolderStructure(baseDir);
if (omitFolders) {
  omitFolders.forEach((value: string) => {
    let omit = path.resolve(value);
    let targets = path.relative(baseDir, omit).split(path.sep);
    let parentNode: NodeElement | undefined = rootFolder;
    let targetNode: NodeElement | undefined;
    for (let i = 0; i < targets.length; i++) {
      if (targetNode) parentNode = targetNode;
      targetNode = parentNode?.children.find(
        (child) => child.val == targets[i]
      );
    }
    if (parentNode && targetNode) parentNode.removeChild(targetNode);
  });
}

rootFolder.print();
