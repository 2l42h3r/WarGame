var fs = require("fs");
var serverConfig, gameConfig;

module.exports.getServerConfig = function() {
	return serverConfig;
};

module.exports.getGameConfig = function() {
	return gameConfig;
};

module.exports.readServerConfig = function readServerConfig(callback) {
	fs.readFile("./serverConfig.json", "utf8", function (err, data) {
		if (err) throw err;
		serverConfig = JSON.parse(data);
		callback();
	});
};

module.exports.readGameConfig = function readGameConfig(callback) {
	fs.readFile("./gameConfig.json", "utf8", function (err, data) {
		if (err) throw err;
		gameConfig = JSON.parse(data);
		callback();
	});
};