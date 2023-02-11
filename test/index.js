const fs = require('fs');
const assert = require('assert');
const expected = require('./expected');

const pathToBlocks = 'test/blocks';
fs.rmSync(pathToBlocks, { force: true, recursive: true });

const css = fs.readFileSync('test/test.css', 'utf8');

require('..')(css, { level: pathToBlocks, tech: 'css' }).then(() => {
    // TODO: fixme
    setTimeout(() => {
        for ([filePath, reference] of Object.entries(expected)) {
            const actual = fs.readFileSync(`${pathToBlocks}/${filePath}`, 'utf-8');
            assert.strictEqual(actual, reference);
        }

        fs.rmSync(pathToBlocks, { force: true, recursive: true });
    }, 500);
});
