var Tx = require("ethereumjs-tx");
const Web3 = require("web3");
const web3 = new Web3(
  "https://ropsten.infura.io/v3/0a4e28b151a24649adb27352044d511a"
);

const account1 = "0x533181c8cb56527A6e7d7dC2D697225EF74d73dD";
const account2 = "0xa097C9Eba8DB7af355d83d8D5042B9ea60Eb7b76";

const privateKey1 = Buffer.from(process.env.MM_PRIVATE_KEY_1, "hex");
const privateKey2 = Buffer.from(process.env.MM_PRIVATE_KEY_2, "hex");
// console.log(process.env.PRIVATE_KEY_1);
// console.log(process.env.PRIVATE_KEY_2);

web3.eth.getBalance(account1, (err, bal) => {  
  console.log("account 1 balance: ", web3.utils.fromWei(bal, "ether"));
});
web3.eth.getBalance(account2, (err, bal) => {
  console.log("account 2 balance: ", web3.utils.fromWei(bal, "ether"));
});

web3.eth.getTransactionCount(account1, (err, txCount) => {
  // Build the transaction
  const txObject = {
    nonce: web3.utils.toHex(txCount),
    to: account2,
    value: web3.utils.toHex(web3.utils.toHex("1", "ether")),
    gasLimit: web3.utils.toHex(21000),
    gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei"))
  };

  console.log(txObject);

  // Sign the transaction
  const tx = new Tx(txObject);
  tx.sign(privateKey1);

  const serializedTransaction = tx.serialize();
  const raw = "0x" + serializedTransaction.toString("hex");

  // Broadcast the transaction
  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log("err",err,"txHash: ", txHash);
  });
});

