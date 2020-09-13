import filterArgs from './filterCommands';
import { logVersion, help } from './stockFunctions';

class Program {
    command?: string;
    flags?: string[];
    version?: string;
    name?: string;
    description?: string;
    commands: Command[];
    commandsArray: string[];
    args: any;

    constructor(args: string[]) {
        this.args = filterArgs(args);

        this.commands = [];
        this.commandsArray = [];

        this.addCommand(
            'version',
            'Get the current software version',
            ['-v'],
            logVersion
        );
        this.addCommand('help', 'Lists available commands', ['-h'], help);
    }

    start() {
        if (!this.commandsArray.includes(this.args.command)) return help(this);

        this.commands
            .filter(
                (cmd) =>
                    cmd.name === this.args.command ||
                    cmd.alias.includes(this.args.command)
            )[0]
            .cb(this);
    }

    addCommand(
        name: string,
        description: string,
        alias: string[],
        cb: Function,
        args?: ArgDescription[]
    ) {
        this.commandsArray.push(name, ...alias);
        this.commands.push({ name, description, alias, cb, args });
    }

    setVersion(version: string) {
        this.version = version;
    }

    setName(name: string) {
        this.name = name;
    }

    setDescription(description: string) {
        this.description = description;
    }
}

export default Program;
