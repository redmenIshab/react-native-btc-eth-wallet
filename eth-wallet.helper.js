import { Wallet } from "ethers";

export function createEthWallet({ mnemonics }) {
  const ethWallet = Wallet.fromMnemonic(mnemonics);
  console.log("eth wallet is ", ethWallet);
}
