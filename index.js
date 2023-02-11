const postcss = require('postcss');
const create = require('bem-tools-create');
const getEntityBySelector = require('./lib/entity-by-selector');

module.exports = async function(css, { level, tech }) {
    const ast = postcss.parse(css);

    const entities = {};

    ast.walkAtRules('keyframes', atRule => {
        console.warn(`ATTENTION: unhandled @keyframes ${atRule.params} rule found!`);
    });

    ast.walkRules(rule => {
        const selector = rule.selector;
        if (!selector.startsWith('.')) {
            return;
        };

        const parent = rule.parent;
        selector.split(',').forEach(subSelector => {
            const entity = getEntityBySelector(subSelector);

            const subRule = rule.clone();
            subRule.selector = subSelector.trim();

            let css = '';
            if (parent.type === 'atrule') {
                css = [
                    `@${parent.name} ${parent.params} {`,
                    subRule.toString()
                        .split('\n')
                        .map(line => `    ${line}`)
                        .join('\n'),
                    '}',
                ].join('\n');
            } else {
                css = subRule.toString();
            }

            if (!entities[entity]) {
                entities[entity] = [css];
            } else {
                entities[entity].push(css);
            }
        });
    });

    for (const [entity, content] of Object.entries(entities)) {
        await create([entity], [level], tech, { fileContent: content.join('\n') });
    }
};
