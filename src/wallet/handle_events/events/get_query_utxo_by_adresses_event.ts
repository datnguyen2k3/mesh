export function get_query_utxo_by_adresses_event(addresses: string[], id: number): any {
    return {
        jsonrpc: "2.0",
        method: "queryLedgerState/utxo",
        params: {
            addresses: addresses,
        },
        id: id
    }
}
