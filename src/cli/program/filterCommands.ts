interface ArgObject {
    command: undefined | string;
    flagArr: FlagObject[];
    flagObj: FlagObject | {};
}

interface FlagObject {
    flag: string;
    value: any;
}

// {flag: args[i], value: true

export default (args: string[]) => {
    args.splice(0, 2);

    const argObject: ArgObject = {
        command: undefined,
        flagArr: [],
        flagObj: {},
    };

    argObject.command = args[0];

    args.shift();

    for (var i = 0; i < args.length; i++) {
        // check for empty flag
        if (args[i] === '--') continue;

        // first check the next index acctually exists, if it doesn't the arg was a boolean
        if (!args[i + 1] && args[i].startsWith('--')) {
            argObject.flagArr.push({ flag: args[i], value: true });
            argObject.flagObj[args[i].replace('--', '')] = true;
            continue;
        }

        // check if the arg is a flag and then next arg isnt a flag in which case it is a value
        if (args[i].startsWith('--') && !args[i + 1].startsWith('--')) {
            argObject.flagArr.push({ flag: args[i], value: args[i + 1] });
            argObject.flagObj[args[i].replace('--', '')] = args[i + 1];
            continue;
        }

        // check if the arg is a flag and then next arg isnt a flag in which case it is a boolean
        if (args[i].startsWith('--') && args[i + 1].startsWith('--')) {
            argObject.flagArr.push({ flag: args[i], value: true });
            argObject.flagObj[args[i].replace('--', '')] = true;
            continue;
        }
    }

    return argObject;
};
