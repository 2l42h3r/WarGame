class Leader {
	constructor(bravery, wisdom, luck) {
		if (gameConfig.maxBravery > 4 || gameConfig.minBravery < 1) {
			throw "The 'bravery' stat must be between 1 and 4";
		}
		if (gameConfig.maxWisdom > 6 || gameConfig.minWisdom < 1) {
			throw "The 'wisdom' stat must be between 1 and 6";
		}
		if (gameConfig.maxLuck > 6 || gameConfig.minLuck < 1) {
			throw "The 'luck' stat must be between 1 and 6";
		}
		this.bravery = bravery;
		this.wisdom = wisdom;
		this.luck = luck;
	}
}