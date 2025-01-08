import {get_balance} from "../functions/get_balance";

export function show_balance(data: any) {
    const utxos = data.result;
    const balance = get_balance(utxos);

    console.log(`Your Balance: ${balance}`);
}
