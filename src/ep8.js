const Web3 = require("web3");
const web3 = new Web3(
  "https://mainnet.infura.io/v3/0a4e28b151a24649adb27352044d511a"
);

// web3.eth.getGasPrice().then(console.log)

// web3.eth
//   .getGasPrice()
//   .then(result => console.log(web3.utils.fromWei(result, "ether")));

// console.log("sha3: ", web3.utils.sha3("0xea"));
// console.log("kexxak256: ", web3.utils.keccak256("0xea"));
// console.log("soliditySha3: ", web3.utils.soliditySha3("0xea"));
// console.log("randomHex: ", web3.utils.randomHex(32));

const _ = web3.utils._;
_.each({ key1: "value1", key2: "value2" }, (value, key) => {
  console.log(key);
});