# babel-plugin-remove-webpack-loaders

Removes `import` declaration and `require()` expression with webpack loaders.

## Installation

Simple as `npm i babel-plugin-remove-webpack-loaders --save-dev`.

Remember to add it to the `.babelrc` config file. E.g.:

```
{
  "env": {
    "test": {
      "plugins": ["remove-webpack-loaders"]
    }
  }
}
```


