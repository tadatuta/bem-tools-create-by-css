const postcssSelectorParser = require('postcss-selector-parser');

module.exports = function getEntityBySelector(selectors) {
    let result = '';

    postcssSelectorParser(selectors => {
        selectors.walkClasses(node => {
            if (!result) {
                result = node.value;
            }
        });
    }).processSync(selectors);

    return result;
};
