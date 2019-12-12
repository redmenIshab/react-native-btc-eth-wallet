const { createBitcoinWallet } = require("./btc-wallet-helper");
const { createEthWallet } = require("./eth-wallet.helper");
require("./shim");
module.exports = function createWallet({ btc, eth, mnemonics }) {
  let btcWalletAddress, ethWalletAddress;
  if (!mnemonics) {
    return;
  } else {
    if (btc) {
      btcWalletAddress = createBitcoinWallet(mnemonics);
    }
    if (eth) {
      ethWalletAddress = createEthWallet(mnemonics);
    }
    return { btcWalletAddress, ethWalletAddress };
  }
};

module.exports = function mnemonicsGenerator() {
  const mnemonics = HDNode.entropyToMnemonic(utils.randomBytes(16));
  console.log("mnemnics generated ", mnemonics);
  return mnemonics;
};
