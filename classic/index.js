const buildStructure = require('./build-structure');
const writeFiles = require('./write-files');

module.exports = function(css, { level, tech, buildImports }) {
    const structureWithLevel = Object.entries(buildStructure(css, tech))
        .reduce((acc, [filePath, content]) => {
            acc[level + '/' + filePath] = content;

            return acc;
        }, {});

    if (buildImports) {
        const indexCSS = Object.keys(structureWithLevel)
            .map(filePath => `@import url(${filePath});`)
            .join('\n');

        console.log(indexCSS);
    }

    writeFiles(structureWithLevel);
};
