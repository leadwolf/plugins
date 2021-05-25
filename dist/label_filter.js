'use strict';

const lower = (s) => s.toLowerCase();
var main = ({ args, data }) => {
    const whitelist = (args.whitelist || []).map(lower);
    const blacklist = (args.blacklist || []).map(lower);
    if (!data.labels) {
        return {};
    }
    if (!whitelist.length && !blacklist.length) {
        return {};
    }
    return {
        labels: data.labels.filter((label) => {
            const lowercased = lower(label);
            if (whitelist.length && !whitelist.includes(label)) {
                return false;
            }
            return blacklist.every((blacklisted) => blacklisted !== lowercased);
        }),
    };
};

module.exports = main;
