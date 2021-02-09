# css-to-bem-file-structure

Generate [BEM file structure](https://en.bem.info/methodology/filestructure/) by CSS file.

## Installation

```sh
npm i css-to-bem-file-structure --save-dev
```

## Usage

```sh
css-to-bem-file-structure path-to-styles.css
```

```sh
css-to-bem-file-structure path-to-styles.css blocks css
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
