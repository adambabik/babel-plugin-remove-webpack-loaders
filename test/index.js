const path   = require("path");
const fs     = require("fs");
const assert = require("assert");
const babel  = require("babel-core");
const plugin = require("../src/index").default;

function trim(str) {
  return str.replace(/^\s+|\s+$/, "");
}

describe("remove webpack loaders imports", () => {
  process.env.NODE_ENV = "plugin";

  const fixturesDir = path.join(__dirname, "fixtures");
  fs.readdirSync(fixturesDir).map((caseName) => {
    it(`should handle ${caseName.split("-").join(" ")}`, () => {
      const fixtureDir = path.join(fixturesDir, caseName);
      const actual     = babel.transformFileSync(
        path.join(fixtureDir, "actual.js"),
        {
          plugins: [plugin]
        }
      ).code;
      const expected = fs.readFileSync(path.join(fixtureDir, "expected.js")).toString();

      assert.equal(trim(actual), trim(expected));
    });
  });
});
