import { Command } from 'commander';
import { generate_credentials } from '../functions/generate_credentials';

export const generateCredentialsCommand = new Command('generate-credentials')
  .description('Generate a wallet credentials')
  .action(async () => {
      let [secret_key, address] = await generate_credentials();
      console.log(`Secret key: ${secret_key}`);
      console.log(`Address: ${address}`);
  });
