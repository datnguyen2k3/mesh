import {map_event} from "./wallet/handle_events/map_event";

const WebSocketClient = require("ws");
const host = "wss://preprod-v6.ogmios-m1.demeter.run";
const headers = {
    "dmtr-api-key": "ogmios1sm5rlt26af0u2h8mnsk",
};


export function send_event(event: any) {
    const socket = new WebSocketClient(host, {
        headers,
    });

    socket.on("open", () => {
        socket.send(Buffer.from(JSON.stringify(event)));
    });

    socket.on("message", (data: Buffer) => {
        const json_data = JSON.parse(data.toString('utf-8'));
        map_event(json_data, socket);
        socket.close();
    });

    socket.on("error", (error: any) => {
        console.error(`WebSocket error: ${error.message}`);
    });

    socket.on("close", (code: Buffer, reason: string) => {

    });
}