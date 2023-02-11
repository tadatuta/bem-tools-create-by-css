const { elemSeparator, modSeparator } = require('./consts');

module.exports = function getFilePathByEntity(entity, tech) {
    const [block, elem] = entity.split(elemSeparator);
    const [blockName, blockModName] = block.split(modSeparator);

    if (elem) {
        const [elemName, elemModName] = elem.split(modSeparator);

        return [
            `${blockName}`,
            `${elemSeparator}${elemName}`,
            elemModName && `${modSeparator}${elemModName}`,
            `${entity}.${tech}`
        ].filter(Boolean).join('/');
    }

    return [
        `${blockName}`,
        blockModName && `${modSeparator}${blockModName}`,
        `${entity}.${tech}`
    ].filter(Boolean).join('/');
}
