"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const file = "dist/cli.js";
if ((0, fs_1.existsSync)(file)) {
    try {
        (0, fs_1.chmodSync)(file, 0o755); // Equivalent to chmod +x
        console.log("✔ cli.js is now executable");
    }
    catch (err) {
        console.error("✖ Could not set executable permission:", err.message);
    }
}
