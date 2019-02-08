var Web3 = require("web3");
var url = "https://mainnet.infura.io/v3/0a4e28b151a24649adb27352044d511a";
var web3 = new Web3(url);
// console.log(web3);
var address = "0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe";
web3.eth
  .getBalance(address, (err, bal) => {
    balance = bal;
  })
  .then(() => {
    var formatEther = web3.utils.fromWei(balance, "ether");
    console.log(formatEther);
    var formatGwei = web3.utils.fromWei(balance, "gwei");
    console.log(formatGwei);
  });
var account = web3.eth.accounts.create();
console.log(account);

web3.eth
  .getBalance("0xf7915B480e82BEBAF48ee971bd661F19724a2168", (err, wei) => {
    balance = web3.utils.fromWei(wei, "ether");
  })
  .then(() => console.log(balance));