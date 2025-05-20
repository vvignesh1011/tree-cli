#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const path_1 = __importDefault(require("path"));
const folderUtil_1 = require("./folderUtil");
const program = new commander_1.Command();
program.option("-r, --root <path>", "base/root folder");
program.parse(process.argv);
const options = program.opts();
let baseDir = options.root ? path_1.default.resolve(options.root) : process.cwd();
const rootFolder = (0, folderUtil_1.getFolderStructure)(baseDir);
rootFolder.print();
