const fs = require('fs');
const assert = require('assert');
const rimraf = require('rimraf');

const pathToBlocks = 'test/blocks';

rimraf.sync(`${pathToBlocks}`);

const css = fs.readFileSync('test/test.css', 'utf8');

require('..')(css, `${pathToBlocks}`, 'css').then(() => {
    // TODO: fixme
    setTimeout(() => {
        const b1 = fs.readFileSync(`${pathToBlocks}/b1/b1.css`, 'utf8');
        assert.strictEqual(b1, '.b1 { color: red; }');
        const b1__e1 = fs.readFileSync(`${pathToBlocks}/b1/__e1/b1__e1.css`, 'utf8');
        assert.strictEqual(b1__e1, '.b1__e1 { color: yellow; }');
        const b1_m1_v1 = fs.readFileSync(`${pathToBlocks}/b1/_m1/b1_m1_v1.css`, 'utf8');
        assert.strictEqual(b1_m1_v1, '.b1_m1_v1 { color: lightcoral; }');
        const b2 = fs.readFileSync(`${pathToBlocks}/b2/b2.css`, 'utf8');
        assert.strictEqual(b2, '.b2 { color: green; }');
        const b2__e1_m1 = fs.readFileSync(`${pathToBlocks}/b2/__e1/_m1/b2__e1_m1.css`, 'utf8');
        assert.strictEqual(b2__e1_m1, '.b2__e1_m1 { color: #eee; }');

        rimraf.sync(pathToBlocks);
    }, 500);
});
