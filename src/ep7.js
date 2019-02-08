const Web3 = require("web3");
const web3 = new Web3(
  "https://mainnet.infura.io/v3/f1cac29116bc4eaabe6433584e8b0fe6"
);

// web3.eth.getBlockNumber().then(console.log)

// web3.eth
//   .getBlock("latest")
//   .then(block =>
//     console.log({ blockHash: block.hash, blockNumber: block.number })
//   );

// web3.eth.getBlockNumber().then(latest => {
//   for (let i = 0; i < 10; i++) {
//     web3.eth.getBlock(latest - i).then(block => console.log(block.hash));
//   }
// });

// web3.eth.getBlock("latest").then(console.log);

// web3.eth.getBlockTransactionCount("latest").then(console.log);

// web3.eth.getBlock("latest").then(b => console.log(b.hash));

const hash =
  "0x2f600f63e3b4376cb2ae2f4ee2d28c05d32966b3d7c658706e169c2fd3388665";
web3.eth.getTransactionFromBlock(hash, 2).then(console.log);