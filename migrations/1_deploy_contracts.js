const DiceGame = artifacts.require("DiceGame.sol");

module.exports = function (deployer) {
  deployer.deploy(
    DiceGame,
    "0x779877A7B0D9E8603169DdbD7836e478b4624789", // LINK Token
    "0xab18414CD93297B0d12ac29E63Ca20f515b3DB46" // VRFV2WRAPPER
  );
};
