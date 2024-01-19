
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const GOERLI_URL = process.env.GOERLI_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
// const ETHERSCAN_API = process.env.ETHERSCAN_API; 

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: GOERLI_URL,
      accounts: [PRIVATE_KEY]
    }
  },

  //uncomment if you want to verify your smart contract usinh hardhat 
  // etherscan: {
  //   apiKey: [ETHERSCAN_API]
  // }
};
