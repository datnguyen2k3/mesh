import {Command} from 'commander';
import {restore_wallet} from "../wallet/functions/restore_credentials";

export const restoreCredentialsCommand = new Command('restore-credentials')
    .description('Restore a wallet credentials from seed')
    .argument('<seed>', 'Seed Phrase of the wallet')
    .action(async (seedPhrase: string) => {
        let UsedAddresses = await restore_wallet(seedPhrase);

        if (UsedAddresses == null) {
            console.log("Invalid Seed Phrase");
            return
        }

        console.log(`Used Addresses: ${UsedAddresses}`);
    });
