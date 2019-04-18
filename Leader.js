class Leader {
	constructor(bravery, wisdom, luck) {
		if (global.gameConfig.maxBravery > 4 || global.gameConfig.minBravery < 1) {
			throw "The 'bravery' stat must be between 1 and 4";
		}
		if (global.gameConfig.maxWisdom > 6 || global.gameConfig.minWisdom < 1) {
			throw "The 'wisdom' stat must be between 1 and 6";
		}
		if (global.gameConfig.maxLuck > 6 || global.gameConfig.minLuck < 1) {
			throw "The 'luck' stat must be between 1 and 6";
		}
		this.bravery = bravery;
		this.wisdom = wisdom;
		this.luck = luck;
	}
}