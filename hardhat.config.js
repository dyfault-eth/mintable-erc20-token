require("@nomicfoundation/hardhat-toolbox");
const dotenv = require("dotenv");
dotenv.config();

const pk = process.env.pk;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    mumbai: {
      url: `https://polygon-mumbai-bor-rpc.publicnode.com`,
      accounts: [pk],
    },
  },
  etherscan: {
    apiKey: process.env.scanApi,
  },
};
