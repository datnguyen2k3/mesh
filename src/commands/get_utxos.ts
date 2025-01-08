import {Command} from 'commander';
import {get_query_utxo_by_adresses_event} from "../wallet/handle_events/events/get_query_utxo_by_adresses_event";
import {send_event} from "../ws_main";
import {GET_UTXOS_ID_EVENT} from "./command_event_id";

export const getUtxosCommand = new Command('get-utxos')
    .description('Get the utxos of the wallet')
    .argument('<address>', 'Address of the wallet')
    .action(async (address: string) => {
        send_event(get_query_utxo_by_adresses_event([address], GET_UTXOS_ID_EVENT));
    });
