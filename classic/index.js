const buildStructure = require('./build-structure');
const writeFiles = require('./write-files');

module.exports = function(css, level, tech) {
    const structureWithLevel = Object.entries(buildStructure(css, tech)).reduce((acc, [filePath, content]) => {
        acc[level + '/' + filePath] = content;

        return acc;
    }, {});

    writeFiles(structureWithLevel);
};
