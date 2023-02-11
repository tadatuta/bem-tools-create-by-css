const fs = require('fs');
const path = require('path');
const assert = require('assert');
const buildStructure = require('../build-structure');

const css = fs.readFileSync(path.join(__dirname, '../../test/test.css'), 'utf-8');
const expected = require('../../test/expected');

assert.deepEqual(buildStructure(css, 'css'), expected);
