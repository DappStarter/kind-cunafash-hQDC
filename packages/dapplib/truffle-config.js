require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october food dance rescue machine slow inflict dose army gate'; 
let testAccounts = [
"0x32bde46de86a8b75a8a5664e6bfbbdcc5d998fbd236d11ae8f50d6978851cb42",
"0xe897a17faf7e5864549f32f9a23cd6f6a07a286ed808f7ea17801f16be3649cd",
"0xab5851ab9030fee54f8e4a1e700f822a48804c2a47157c93d05d42af9397166a",
"0xc6372313f46c705c8ea08ce812e9e5eeefae55306ce8552d9c5bf7ecf32f22fb",
"0x8e61bf70b694025b234d3b0c89c648969dad9ee5ba8021344f6649b89d843bc8",
"0x92c20543c0922df0459c911d5bfedfa59bea65c304f5e418749fc0d8a300afe7",
"0x9e39feba1b04cd3aa890c06ca1430e6810027f0d0c5553204234a7e8054069e1",
"0x22ae5b4374d825a0eb39c8c948c5064ffdfae5d4f6c7c0b662683c31448d8cfa",
"0x723d969c16226f756efe516ba4bcede8df1ea01b9911b3b5d2d2fe89f24a970e",
"0xc64cae797ece8688d06f1046690cbd56af63fdf5011ee02cb746f6b634b233d2"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


