## What is grunt-style-extract?

Grunt-style-extract is a Grunt version of [style-extract](https://github.com/anpsthemes/style-extract/), which is used for extracting only specific CSS properties and their selectors from CSS files.

## Install

```
npm install grunt-style-extract
```

## Options

* properties: an array of CSS properties, that will be extracted

## Usage

``` javascript
grunt.initConfig({
  ...
  styleExtract: {
    colors: {
      options: {
          'properties': ['color', 'background-color']
      },
      files: {
          'dist/style.css': 'lib/style.css'
      }
    },
  },
  ...
});
```

### Before

``` css
/* Foo */
.foo {
  background-color: #fff;
  color: #000;
  display: block;
  font-size: 12px;
}

/* Bar */
.bar {
  text-align: center;
}
```

### After
``` css
.foo {
  background-color: #fff;
  color: #000;
}
```

## Grunt version
The Gulp version can be found at [grunt-style-extract](https://www.npmjs.com/package/gulp-style-extract).

## Node version
The Node version can be found at [style-extract](https://www.npmjs.com/package/style-extract).

## License

[MIT](http://en.wikipedia.org/wiki/MIT_License)
