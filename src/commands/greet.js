"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greetCommand = void 0;
const commander_1 = require("commander");
exports.greetCommand = new commander_1.Command('greet')
    .description('Greet someone by name')
    .argument('<name>', 'Name of the person to greet')
    .action((name) => {
    console.log(`Hello, ${name}!`);
});
