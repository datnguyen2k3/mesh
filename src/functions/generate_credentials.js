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
exports.generate_credentials = void 0;
const core_1 = require("@meshsdk/core");
const generate_credentials = () => __awaiter(void 0, void 0, void 0, function* () {
    const secret_key = core_1.MeshWallet.brew(true);
    const wallet = new core_1.MeshWallet({
        networkId: 0,
        key: {
            type: "root",
            bech32: secret_key,
        },
    });
    const unusedAddresses = yield wallet.getUnusedAddresses();
    return [secret_key, unusedAddresses];
});
exports.generate_credentials = generate_credentials;
// (async () => {
//     let [secret_key, address] = await generate_credentials();
//     console.log(`Secret key: ${secret_key}`);
//     console.log(`Address: ${address}`);
// })();
