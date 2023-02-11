const fs = require('fs');
const assert = require('assert');

const pathToBlocks = 'test/blocks';
fs.rmSync(pathToBlocks, { force: true, recursive: true });

const css = fs.readFileSync('test/test.css', 'utf8');

const expected = {
    'b1/b1.css': [
        '.b1 { color: red; color: green; }',
        '.b1.b2 { color: yellowgreen; }',
        '.b1 { color: pink; }',
        '.b1:hover { color: brown; }',
    ].join('\n'),
    'b1/__e1/b1__e1.css': [
        '.b1__e1 { color: yellow; }',
        '.b1__e1::after { content: ""; }',
    ].join('\n'),
    'b1/_m1/b1_m1_v1.css': '.b1_m1_v1 { color: lightcoral; }',
    'b2/b2.css': [
        '.b2 { color: pink; }',
        '.b2 { color: green; }',
    ].join('\n'),
    'b2/__e1/_m1/b2__e1_m1.css': '.b2__e1_m1 { color: #eee; }'
}

require('..')(css, pathToBlocks, 'css').then(() => {
    // TODO: fixme
    setTimeout(() => {
        for ([filePath, reference] of Object.entries(expected)) {
            const actual = fs.readFileSync(`${pathToBlocks}/${filePath}`, 'utf-8');
            assert.strictEqual(actual, reference);
        }

        fs.rmSync(pathToBlocks, { force: true, recursive: true });
    }, 500);
});
