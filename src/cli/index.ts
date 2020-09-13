import { green } from 'chalk';
import CommandHandler from './program';

const program = new CommandHandler(process.argv);

program.setVersion('1.0.0');

program.setName('design-ui');

program.setDescription(`design-ui is a CLI tool for managing design systems.`);

program.addCommand('init', 'Initiate design-ui', ['-i', '-init'], () =>
    console.log(green('design-ui is coming soon!'))
);

program.start();
