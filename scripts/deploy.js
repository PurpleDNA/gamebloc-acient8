const hre = require("hardhat");

async function main() {
  const initialSupply = hre.ethers.parseUnits("1000000", 18);
  const Ancient8Token = await hre.ethers.deployContract("Ancient8Token", [initialSupply]);

  console.log(`Ancient8Token deployed to: ${await Ancient8Token.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
