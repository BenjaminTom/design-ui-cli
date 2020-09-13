import {Command} from './types';
import chalk from 'chalk';

export const logVersion = ({version, name}: DefaultFunction) => console.log(`${name} - Version: ${version}`);

interface DefaultFunction {
    version?: string;
    name?: string;
    description?: string;
    commands?: Command[];
}

const logArgumentDetail = (args) => {
    args.forEach((arg) => {
        // console.log(arg);
        console.log(
            `       ${chalk.blue(arg.argName + ' *')} ${arg.argDescription}${arg.isRequired ? ` (Required)` : ''}`
        );
    });
};

export const help = ({commands, version, name, description}: DefaultFunction) => {
    console.log();
    console.log(`${chalk.green(`${name} Quick Help - Version: ${version}`)}`);
    console.log();
    console.log(description);
    console.log(
        `   ${chalk.yellow('COMMAND')} | ${chalk.cyan('DESCRIPTION')} | ${chalk.magenta('ALIAS')} | ${chalk.blue(
            'ARGS'
        )}\n`
    );
    commands.forEach((cmd: Command) => {
        console.log(
            `   ${chalk.yellow(cmd.name)} | ${chalk.cyan(cmd.description)} | ${chalk.magenta(cmd.alias.join(' '))} |`
        );
        if (cmd.args) logArgumentDetail(cmd.args);
    });
    console.log();
    console.log();
};
