import { chmodSync, existsSync } from "fs";

const file = "dist/cli.js";

if (existsSync(file)) {
  try {
    chmodSync(file, 0o755); // Equivalent to chmod +x
    console.log("✔ cli.js is now executable");
  } catch (err: any) {
    console.error("✖ Could not set executable permission:", err.message);
  }
}
