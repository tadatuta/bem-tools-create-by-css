const postcss = require('postcss');
const create = require('bem-tools-create');
const postcssSelectorParser = require('postcss-selector-parser');

module.exports = async function(css, level, tech) {
    const ast = postcss.parse(css);

    const entities = {};

    ast.walkRules(rule => {
        const selector = rule.selector;
        if (!selector.startsWith('.')) {
            return;
        };

        selector.split(',').forEach(subSelector => {
            const entity = getEntityBySelector(subSelector);

            if (!entities[entity]) {
                entities[entity] = [rule.toString()];
            } else {
                entities[entity].push(rule.toString());
            }
        });
    });

    for (const [entity, content] of Object.entries(entities)) {
        await create([entity], [level], tech, { fileContent: content.join('\n') });
    }
};

function getEntityBySelector(selectors) {
    let result = '';

    postcssSelectorParser(selectors => {
        selectors.walkClasses(node => {
            if (!result) {
                result = node.value;
            }
        });
    }).processSync(selectors);

    return result;
}
