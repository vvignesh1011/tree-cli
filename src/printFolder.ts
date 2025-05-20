#!/usr/bin/env node

import { Command } from "commander";
import path from "path";
import { getFolderStructure } from "./folderUtil";

const program = new Command();
program.option("-r, --root <path>", "base/root folder");
program.parse(process.argv);

const options = program.opts();
let baseDir = options.root ? path.resolve(options.root) : process.cwd();

const rootFolder = getFolderStructure(baseDir);
rootFolder.print();
