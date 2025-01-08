import {get_lovelace} from "../functions/get_balance";

export function show_utxos(data: any) {
    const utxos = data.result;

    if (!utxos) {
        console.log("No UTXOs found");
        return;
    }

    console.log(`Your UTXOs:`);

    for (const utxo of utxos) {
        console.log(`{\n`);
        console.log(`\tTxHash: ${utxo.transaction.id}`);
        console.log(`\tTxIndex: ${utxo.index}`);
        console.log(`\tAmount: ${get_lovelace(utxo.value)} lovelace`);
        console.log(`}\n`);
    }

}
