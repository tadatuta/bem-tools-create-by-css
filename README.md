# css-to-bem-file-structure

Generate [BEM file structure](https://en.bem.info/methodology/filestructure/) by CSS file.

## Installation

```sh
npm i css-to-bem-file-structure --save-dev
```

## Usage

To generate [nested structure](https://en.bem.info/methodology/filestructure/#nested) use
```sh
./node_modules/.bin/bemify path-to-styles.css
```

In this case you may customize separators with environment variables `ELEM_SEPARATOR` and `ELEM_MOD_SEPARATOR`.

## Advanced usage

To customize [file structure organization](https://en.bem.info/methodology/filestructure/) use `css-to-bem-file-structure` binary. It supports the same [bem-config](https://github.com/bem/bem-sdk/tree/master/packages/config#config) file as [bem-tools-create](https://www.npmjs.com/package/bem-tools-create#configuration) package.

NOTE: such configuration was never tested and considered deprecated. List of imports won't be generated in this case.

```sh
./node_modules/.bin/css-to-bem-file-structure path-to-styles.css
```

```sh
./node_modules/.bin/css-to-bem-file-structure path-to-styles.css blocks css
```

## How it works

For file `test.css` with

```css
.b1 { color: red; }

.b1__e1 { color: yellow; }

.b1_m1_v1 { color: lightcoral; }

.b2 { color: green; }

.b2__e1_m1 { color: #eee; }
```

following files will be generated:

```
blocks/
    b1/
        __e1/
            b1__e1.css
        _m1/
            b1_m1_v1.css
        b1.css

    b2/
        __e1/
            _m1/
                b2__e1_m1.css
        b2.css
```
