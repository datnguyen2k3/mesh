import {show_balance} from "./show_balance";
import {GET_BALANCE_ID_EVENT, GET_UTXOS_ID_EVENT} from "../../commands/command_event_id";
import {show_utxos} from "./show_utxos";

export const map_event = (data: any, socket: any) => {
    switch (data.id) {
        case GET_BALANCE_ID_EVENT:
            show_balance(data);
            break;
        case GET_UTXOS_ID_EVENT:
            show_utxos(data);
            break;
        default:
            return null;
    }
}