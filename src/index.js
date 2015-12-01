export default function () {
  return {
    visitor: {
      ImportDeclaration(path) {
        if (path.node.source.value.indexOf("!") > -1) {
          path.remove();
        }
      },
      CallExpression(path) {
        if (path.node.callee.name !== "require") {
          return;
        }

        let args = path.node.arguments;

        if (args[0].value.indexOf("!") > -1) {
          path.remove();
        }
      }
    }
  };
}
