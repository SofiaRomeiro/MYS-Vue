
module.exports = class RecipeDTO {
	constructor(name, type, ingredients, preparation) {
		this.name = name;
		this.type = type;
		this.ingredients = ingredients;
		this.preparation = preparation;
	}
}

