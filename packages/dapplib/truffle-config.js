require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture rebel frame security iron note praise coconut harvest nasty flip gasp'; 
let testAccounts = [
"0x139691b3e5cdf4ece5e750da8c66f64d3859fe707ec317ab7f18b30292d523e7",
"0xfd46052ca9a30c95ac436202202c8b97a376ebb1c92f773a85f396647d2e11c3",
"0x64ba0de1aec39abaca99b83621663cfa44d6b228c6a91ad818b1acab9e3d54f1",
"0x506725f82595a1464fdb492a80759aa60a57d74c575fd0dc33f4b918fa1eaf88",
"0xe31e1688c1904d8e4f79baa767bbb2574c231ea7aaea033504732898fc5dcf45",
"0x9712eba528aac6c14f7d4235bd5298d5f134cc49ab23efa479e0f6b93e2d26bc",
"0x2902446450524f0156dcf398221b8326b476052386bb9df14aa4f17c190041f0",
"0xa4d617f2ec911c83e52813eb7a7e467dfb3b023900ac1829726506bd24a09fa9",
"0x072b03e1ca75ae7821ebcf484133ffcb6e384728eaa31742a048e4c9ce3a546b",
"0x8bb50a497acd6813084aa8fcf16abe80250820c82493617aaed937cd1f0275d3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

