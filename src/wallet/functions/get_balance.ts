export const ADA_TO_LOVELACE = 1000000;

export function get_balance(utxos: Array<any>): number {
    if (!utxos) {
        return 0;
    }

    let balance = 0;
    for (let utxo of utxos) {
        balance += get_lovelace(utxo.value);
    }
    return balance;
}

export function get_lovelace(utxo_value: any) {
    if (typeof utxo_value.ada === 'number') {
        return utxo_value.ada * ADA_TO_LOVELACE;
    }

    return utxo_value.ada.lovelace;
}
