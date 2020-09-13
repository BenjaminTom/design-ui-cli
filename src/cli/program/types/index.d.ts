export interface Command {
    name: string;
    description: string;
    alias: string[];
    cb: Function;
    args?: ArgDescription[];
}

export interface ArgDescription {
    argName: string;
    isRequired: boolean;
    argDescription: string;
}

export interface ArgObject {
    command: undefined | string;
    flagArr: FlagObject[];
    flagObj: FlagObject | {} | ListingArgs;
}

export interface FlagObject {
    flag: string;
    value: any;
}
