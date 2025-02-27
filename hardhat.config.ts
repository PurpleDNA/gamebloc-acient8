import { HardhatUserConfig } from "hardhat/types";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.28",
    settings: {
      viaIR: true, // Enable the IR pipeline
      optimizer: {
        enabled: true, // Enable the optimizer
        runs: 200, // Optimize for 200 runs
      },
    },
  },
  networks: {
    ancient8: {
      url: process.env.ANCIENT8_RPC_URL || "",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },
};

export default config;