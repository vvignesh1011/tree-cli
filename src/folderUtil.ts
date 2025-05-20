import NodeElement from "./tree";
import fs from "fs";
import path from "path";

export const getFolderStructure = (dirPath: string, rootNode?: NodeElement) => {
  let files = fs.readdirSync(dirPath, { encoding: "utf-8" });
  let rootFolderName = path.basename(dirPath);
  let rootFolder = rootNode || new NodeElement(rootFolderName);
  files.forEach((item) => {
    let folder = new NodeElement(item);
    let isDir = fs.lstatSync(path.join(dirPath, item)).isDirectory();
    if (isDir) getFolderStructure(path.join(dirPath, item), folder);
    rootFolder.addChild(folder);
  });
  return rootFolder;
};
