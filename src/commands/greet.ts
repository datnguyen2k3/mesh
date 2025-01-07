import { Command } from 'commander';

export const greetCommand = new Command('greet')
  .description('Greet someone by name')
  .argument('<name>', 'Name of the person to greet')
  .action((name: string) => {
    console.log(`Hello, ${name}!`);
  });

"solution solution solution solution solution solution solution solution solution solution solution solution solution solution solution solution solution solution solution solution solution solution solution solution"
