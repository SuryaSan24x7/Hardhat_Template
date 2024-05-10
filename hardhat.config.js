require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "local",
  networks: {
    // testnet: {
    //   // url: "https://pool.arkhia.io/hedera/testnet/json-rpc/v1/03Gef8mb4aY1622ac34C3mW7cW6Y2G29",
    //   // chainId: 296,
    //   // accounts: [process.env.OWNER_KEY, process.env.BUYER_KEY],
    //   url: process.env.API_url,
    //   chainId: 296,
    //   accounts: [process.env.TESTNET_OPERATOR_PRIVATE_KEY]
    // },
    local: {  // Configuration for local development network (e.g., Ganache)
      url: "http://127.0.0.1:8545",  // URL to the local node
      chainId: 1337,  // Common chain ID for local networks
      accounts: ['0x98e3b2394151ce49f4776402e4ef12463443bd97c9440059a56ae2c7098b9b2f']  // Private key for the local account
    }
}};
