module.exports = class GameState {
	constructor(gameStateFile) {
		if (!gameStateFile.hasOwnProperty("Leaders")) {
			throw "GameState corrupted! (No 'Leaders' object found)";
		}
		if (!gameStateFile.hasOwnProperty("Countries")) {
			throw "GameState corrupted! (No 'Countries' object found)";
		}
		this.leaders = gameStateFile.Leaders;
		this.countries = gameStateFile.Countries;
	}
};