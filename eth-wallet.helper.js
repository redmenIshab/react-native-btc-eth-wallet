import { Wallet } from "ethers";

export function createEthWallet({ mnemonics }) {
  const ethWallet = Wallet.fromMnemonic(mnemonics);
  const { address } = ethWallet;
  return address;
}
