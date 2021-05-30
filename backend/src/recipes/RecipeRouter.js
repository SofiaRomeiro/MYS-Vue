const express = require('express');
const RecipeService = require('./RecipeService');
const cors = require('cors');
const router = express.Router();

const corsOptions = {
	origin: '*',
	methods: ['GET'],
	optionSuccessStatus: 200
};

router.options('*', cors(corsOptions));

router.get('/recipes', async(req, res) => {
	try {
		const recipes = await RecipeService.getRecipes();
		res.send(recipes);
	}
	catch (error) {
		res.status(400).json({
			message: error.message
		});
	}
});

module.exports = router;
