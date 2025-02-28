import { ethers } from "hardhat";
import { ContractFactory, Contract } from "ethers";
import { expect } from "chai";

describe("TournamentSystem", function () {
  let TournamentMutation: ContractFactory;
  let tournamentMutation: Contract;
  let TournamentSystem: ContractFactory;
  let tournamentSystem: Contract;

  beforeEach(async function () {
    // Deploy the TournamentMutation library
    TournamentMutation = await ethers.getContractFactory("TournamentMutation");
    tournamentMutation = await TournamentMutation.deploy();
    await tournamentMutation.waitForDeployment(); // Wait for deployment confirmation

    // Get the TournamentSystem contract factory with linked library
    TournamentSystem = await ethers.getContractFactory("TournamentSystem", {
      libraries: {
        TournamentMutation: await tournamentMutation.getAddress(), // Link library
      },
    });

    // Deploy TournamentSystem
    tournamentSystem = await TournamentSystem.deploy();
    await tournamentSystem.waitForDeployment();
  });

  it("Should deploy the contract and set the owner", async function () {
    const [owner] = await ethers.getSigners();
    expect(await tournamentSystem.owner()).to.equal(owner.address);
  });
});
