var configReader = require("./configReader");
var serverConfig, gameConfig;

configReader.readServerConfig(function() {
	serverConfig = configReader.getServerConfig();
});

configReader.readGameConfig(function() {
	gameConfig = configReader.getGameConfig();
});