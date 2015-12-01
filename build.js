const path   = require("path");
const fs     = require("fs");
const rimraf = require("rimraf");
const babel  = require("babel-core");

const libDir = path.join(__dirname, "lib");

// remove lib dir
rimraf.sync(libDir);

// compile
fs.mkdirSync(libDir);

const code = babel.transformFileSync(
  path.join(__dirname, "src", "index.js"),
  {
    presets: ["es2015"]
  }
).code;

fs.writeFileSync(path.join(__dirname, "lib", "index.js"), code);

console.log("Compiled!")
