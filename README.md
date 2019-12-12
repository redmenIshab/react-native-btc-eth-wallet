It implements ethers.js and bitcoinjs-lib node library by hack to implement it into react-native.

It contains features :

                1. Mnemonic code  generation,
                2. Bitcoin wallet address generation,
                3. Etherium wallet address generation.

        npm i react-native-btc-eth-wallet

Ways to use:

                import {createWallet, mnemonicsGenerator} from 'react-native-btc-eth-wallet';

                //invoke as
                const mnemonics = mnemonicsGenerator();
                createWallet({eth: true,btc:false, mnemonics});

Any new PR is welcome and show some love putting some stars to the project.
