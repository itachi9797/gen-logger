const { Signale } = require('signale');
const defaultOptions = require('./utils/defaultOptions.js');
const types = require('./utils/types.js');

class Logger extends Signale {
    constructor(options = {}) {
        const mergedOptions = { ...defaultOptions, ...options };
        super({
            ...mergedOptions,
            types: {
                ...types,
            },
        });
    }
}

module.exports = Logger;
