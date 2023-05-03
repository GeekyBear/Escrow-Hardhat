require('@nomicfoundation/hardhat-toolbox');

module.exports = {
  solidity: "0.8.17",
  paths: {
    artifacts: "./app/src/artifacts",
  },
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/YZZa2Q5z5gysbumiR1P3M2oOPvj7HQWA',
      accounts: ['8ca2f2cfec2d18d92f8b84e13b0aef82f91e78dc631b4d897dc2835e34279bdf']
    }
  },
};
