module.exports = class ServerConfig {
	constructor(serverConfigFile) {
		this.port = serverConfigFile.port;
	}
};