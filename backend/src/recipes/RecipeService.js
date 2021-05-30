const RecipeDTO = require('./dto/RecipeDTO');

module.exports = class RecipeService {
	static async getRecipes() {
		return [
			new RecipeDTO('porco', 'carne', [], []),
			new RecipeDTO('vaca', 'carne', [], [])
		];
	} 
}

