var fs = require("fs");
var $ = jQuery = require("jquery");
var csv = require("jquery-csv");
var ServerConfig = require("./serverConfig.js");
var GameConfig = require("./gameConfig.js");
var GameState = require("./GameState.js");
var serverConfig, gameConfig, gameState;

serverConfig = new ServerConfig(JSON.parse(fs.readFileSync("./serverConfig.json", "utf8")));
gameConfig = new GameConfig(JSON.parse(fs.readFileSync("./gameConfig.json", "utf8")));

try {
	if (fs.existsSync("./gameState.json")) {
		gameState = new GameState(JSON.parse(fs.readFileSync("./gameState.json", "utf8")));
	}
} catch(err) {
	// handle lack of gamestate
}

console.log($.csv.toArrays(fs.readFileSync("./provinces.csv", "utf8")));