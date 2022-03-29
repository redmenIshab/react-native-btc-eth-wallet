import { Wallet } from "ethers";

export function createEthWallet({ mnemonics }) {
  const ethWallet = Wallet.fromMnemonic(mnemonics);
  const { address } = ethWallet;
   let wordPhrase = "class1  class2 class3 class4 class5 class6 class7"
  return {address, wordPhrase};
}
