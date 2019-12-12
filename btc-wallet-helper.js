const bitcoin = require("bitcoinjs-lib");
const bip39 = require("bip39");
import { utils } from "ethers";

// const {utils} = ethers;
const { HDNode } = utils;
const mnemonics =
  "train endless bike absent gown almost already expect month shop exotic spend";

export function createBitcoinWallet({ mnemonics }) {
  //seed generation from the mnemonics
  const seedHex = bip39.mnemonicToSeedSync(mnemonics);
  console.log("seed from mnemonics", seedHex.toString("hex"));
  //bitfoin wallet creation using seed
  let root = bitcoin.bip32.fromSeed(seedHex, bitcoin.networks["mainnet"]);
  console.log("root is ", root);
  //supply a path twhich makes the privatekey unique
  const path = "m/49'/1'/0'/0/0";
  const child = root.derivePath(path);
  //wif is the private key
  let WIF = child.toWIF();
  console.log("wif is ", WIF);

  // Now we can generate the address using the private key
  const keyPair = bitcoin.ECPair.fromWIF(WIF, bitcoin.networks["mainnet"]);
  const { address } = bitcoin.payments.p2pkh({
    pubkey: keyPair.publicKey,
    network: bitcoin.networks["mainnet"]
  });
  console.log("the address of the wallet is", address);
  return address;
}

export function mnemnicGen() {
  const mnemonics = HDNode.entropyToMnemonic(utils.randomBytes(16));
  console.log("mnemnics generated ", mnemonics);
  return mnemonics;
}
