import {show_balance} from "./show_balance";
import {GET_BALANCE_ID_EVENT} from "../../commands/get_balance";

export const map_event = (data: any, socket: any) => {
    switch (data.id) {
        case GET_BALANCE_ID_EVENT:
            show_balance(data);
        default:
            return null;
    }
}