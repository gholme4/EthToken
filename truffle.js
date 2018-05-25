module.exports = {
	// See <http://truffleframework.com/docs/advanced/configuration>
	// to customize your Truffle configuration!
	networks: {
		development: {
			host: "localhost",
			port: 8545,
			network_id: "*",
			gas: 4600000,
			gasPrice: 10000000000000
		}
	}
};