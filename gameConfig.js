module.exports = class GameConfig {
	constructor(gameConfigFile) {
		this.startMoney = gameConfigFile.startMoney;
		this.minBravery = gameConfigFile.minBravery;
		this.maxBravery = gameConfigFile.maxBravery;
		this.minWisdom = gameConfigFile.minWisdom;
		this.maxWisdom = gameConfigFile.maxWisdom;
		this.minLuck = gameConfigFile.minLuck;
		this.maxLuck = gameConfigFile.maxLuck;
		this.minStability = gameConfigFile.minStability;
		this.maxStability = gameConfigFile.maxStability;
		this.spyMasterAdditive = gameConfigFile.spyMasterAdditive;
		this.spyActionBonus = gameConfigFile.spyActionBonus;
		this.standardStability = gameConfigFile.standardStability;
		this.stabilityNormalizer = gameConfigFile.stabilityNormalizer;
	}
};