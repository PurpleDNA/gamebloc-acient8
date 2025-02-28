const hre = require("hardhat");

async function main() {
  // Get signers properly in Ethers v6
  const signers = await hre.ethers.getSigners();

  if (signers.length === 0) {
    throw new Error("No signers available. Make sure Hardhat network is running.");
  }

  const deployer = signers[0];

  console.log("Deploying contracts with the account:", await deployer.getAddress());

  const initialSupply = hre.ethers.parseUnits("1000000", 18);
  const TournamentSystem = await hre.ethers.getContractFactory("TournamentSystem", deployer);
  const tournamentSystem = await TournamentSystem.deploy(initialSupply);

  await tournamentSystem.waitForDeployment();

  console.log("TournamentSystem deployed to:", await tournamentSystem.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
