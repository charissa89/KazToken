import Web3 from 'web3';

let web3;

if (typeof Web3 !== 'undefined' && Web3.currentProvider != null) {
    web3 = new Web3(Web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

export default web3;