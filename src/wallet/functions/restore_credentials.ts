import {MeshWallet} from "@meshsdk/core";

export const restore_wallet = async (seedPhrase: string) => {
    try {
        const words = seedPhrase.split(" ");

        const wallet = new MeshWallet({
            networkId: 0,
            key: {
                type: "mnemonic",
                words: words,
            },
        });

        return wallet.getUsedAddresses()
    } catch (error) {
        console.log(error);
        return null
    }
};
