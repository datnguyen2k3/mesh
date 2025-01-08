import {Command} from 'commander';
import {get_query_utxo_by_adresses_event} from "../wallet/handle_events/events/get_query_utxo_by_adresses_event";
import {map_event} from "../wallet/handle_events/map_event";
import {send_event} from "../ws_main";

const WebSocketClient = require("ws");

export const GET_BALANCE_ID_EVENT = 1;

export const getBalanceCommand = new Command('get-balance')
    .description('Get the balance of the wallet')
    .argument('<address>', 'Address of the wallet')
    .action(async (address: string) => {
        send_event(get_query_utxo_by_adresses_event([address], GET_BALANCE_ID_EVENT));
    });
