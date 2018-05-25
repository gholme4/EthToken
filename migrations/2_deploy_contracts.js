var EthToken = artifacts.require("./EthToken.sol");

module.exports = function(deployer) {
	deployer.deploy(EthToken, "GHT", "George Holems Token", 18, 10000, true, {gas: 4600000});
};
