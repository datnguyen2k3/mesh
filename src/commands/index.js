"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const program = new commander_1.Command();
program
    .name('mesh-cli')
    .description('A custom CLI for Mesh tool')
    .version('1.0.0');
// Command: greet
program
    .command('greet <name>')
    .description('Greet someone by name')
    .action((name) => {
    console.log(`Hello, ${name}!`);
});
// Command: sum
program
    .command('sum <a> <b>')
    .description('Sum two numbers')
    .action((a, b) => {
    const result = parseInt(a) + parseInt(b);
    console.log(`The sum of ${a} and ${b} is: ${result}`);
});
program.parse(process.argv);
