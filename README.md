# Wallet Cli Tools

This project allows you to interact to Cardano blockchain with CLI.

## Generate Wallet

To generate a new wallet, use the following command:

```bash
pnpm run start generate-credentials
```

## Restore Wallet

To restore an existing wallet, use the following command:

```bash
pnpm run start restore-credentials "<your_seed_phrase>"
```

## Get Balance Wallet

To get balance of a wallet, use the following command:

```bash
pnpm run start get-balance "<your_address>"
```

## Get Utxos Wallet

To get utxos of a wallet, use the following command:

```bash
pnpm run start get-utxos "<your_address>"
```