const fs = require('fs');
const path = require('path');

module.exports = function writeFiles(fsStructure) {
    for (const [filePath, content] of Object.entries(fsStructure)) {
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, content);
    }
}
