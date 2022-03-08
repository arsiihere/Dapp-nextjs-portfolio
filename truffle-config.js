// const keys = require("./keys/keys");
console.log(keys);
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 7545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },
    ropsten: {
      // must be a thunk, otherwise truffle commands may hang in CI
      provider: () =>
        new HDWalletProvider(
          keys.MEMOCIC_PHRASE,

          `https://ropsten.infura.io/v3/${keys.INFURA_ROPSTEN_KEY}`,
          0
        ),
      network_id: "3",
      gas: 5500000,
      gasPrice: 20000000000,
      confirmations: 2,
      timeoutBlocks: 200,
    },
  },
  contracts_build_directory: "./public/contracts",

  mocha: {
    // timeout: 100000
  },

  compilers: {
    solc: {
      version: "0.8.4",
    },
  },

  db: {
    enabled: false,
  },
};

// 1_initial_migration.js
// ======================

//    Deploying 'Migrations'
//    ----------------------
//    > transaction hash:    0xa89d3d4f06bcb2efdd65d51fca320859b66732f8e5c9c00b98fd8d6bd2278175
//    > Blocks: 2            Seconds: 13
//    > contract address:    0xE2AFF3aFc9752Cc10742bd9A48C4cC506d04E2Bc
//    > block number:        12059175
//    > block timestamp:     1646741372
//    > account:             0x191ca14A9AebBB9817c298Fe6e46EA386Ba7900e
//    > balance:             1.99499692
//    > gas used:            250154 (0x3d12a)
//    > gas price:           20 gwei
//    > value sent:          0 ETH
//    > total cost:          0.00500308 ETH

//    Pausing for 2 confirmations...
//    ------------------------------
//    > confirmation number: 1 (block: 12059176)
//    > confirmation number: 2 (block: 12059177)

//    > Saving migration to chain.
//    > Saving artifacts
//    -------------------------------------
//    > Total cost:          0.00500308 ETH

// 2_CourseMarketPlace.js
// ======================

//    Deploying 'CourseMarketplace'
//    -----------------------------
//    > transaction hash:    0x2891c6fd46564c23636a6bb82b75fee402734f6c31984bc47800b2aa7968b3a3
//    > Blocks: 1            Seconds: 31
//    > contract address:    0x0A407737aa961aaB2e041A513cddB670f8f978C0
//    > block number:        12059180
//    > block timestamp:     1646741440
//    > account:             0x191ca14A9AebBB9817c298Fe6e46EA386Ba7900e
//    > balance:             1.9641851
//    > gas used:            1494678 (0x16ce96)
//    > gas price:           20 gwei
//    > value sent:          0 ETH
//    > total cost:          0.02989356 ETH

//    Pausing for 2 confirmations...
//    ------------------------------
//    > confirmation number: 1 (block: 12059181)
//    > confirmation number: 2 (block: 12059182)

//    > Saving migration to chain.
//    > Saving artifacts
//    -------------------------------------
//    > Total cost:          0.02989356 ETH

// Summary
// =======
// > Total deployments:   2
// > Final cost:          0.03489664 ETH
