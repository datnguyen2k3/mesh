"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCredentialsCommand = void 0;
const commander_1 = require("commander");
const generate_credentials_1 = require("../functions/generate_credentials");
exports.generateCredentialsCommand = new commander_1.Command('generate-credentials')
    .description('Generate a wallet credentials')
    .action(() => __awaiter(void 0, void 0, void 0, function* () {
    let [secret_key, address] = yield (0, generate_credentials_1.generate_credentials)();
    console.log(`Secret key: ${secret_key}`);
    console.log(`Address: ${address}`);
}));
