const DiceGame = artifacts.require("DiceGame.sol");

module.exports = function (deployer) {
  deployer.deploy(
    DiceGame,
    "0x6747Cc213B73F562E469fc032D6d364fb784351F", // LINK Token
    "0x7F8F83faE221411249e67eb3DCAC46aD65e022E1" // VRFV2WRAPPER
  );
};
