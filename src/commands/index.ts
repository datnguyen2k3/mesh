import { Command } from 'commander';
import {greetCommand} from "./greet";
import {generateCredentialsCommand} from "./generate_credentials";
import {restoreCredentialsCommand} from "./restore_credentials";
import {getBalanceCommand} from "./get_balance";
import {getUtxosCommand} from "./get_utxos";

const program = new Command();

program
  .name('mesh-cli')
  .description('A custom CLI for Mesh tool')
  .version('1.0.0');

// Add commands here
program.addCommand(greetCommand);
program.addCommand(generateCredentialsCommand);
program.addCommand(restoreCredentialsCommand);
program.addCommand(getBalanceCommand);
program.addCommand(getUtxosCommand);

program.parse(process.argv);
