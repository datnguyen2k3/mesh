import { MeshWallet } from "@meshsdk/core";

export const generate_credentials = async () => {
  const secret_key = MeshWallet.brew(true) as string;

  const wallet = new MeshWallet({
    networkId: 0,
    key: {
      type: "root",
      bech32: secret_key,
    },
  });

  const unusedAddresses = await wallet.getUnusedAddresses();

  return [secret_key, unusedAddresses]
};
