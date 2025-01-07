import { Command } from 'commander';
import {greetCommand} from "./greet";
import {generateCredentialsCommand} from "./generate_credentials";

const program = new Command();

program
  .name('mesh-cli')
  .description('A custom CLI for Mesh tool')
  .version('1.0.0');

// Add commands here
program.addCommand(greetCommand);
program.addCommand(generateCredentialsCommand);

program.parse(process.argv);
