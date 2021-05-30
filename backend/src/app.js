const express = require('express');
const cors = require('cors');

const RecipeRouter = require('./recipes/RecipeRouter');

const app = express();
app.use(express.json());
const corsOptions = {origin: '*'};
app.use(cors(corsOptions));
app.use(express.static('public'));
const port =  3000;

app.use((req, res, next) => {
	console.log('LOG: ', new Date().toTimeString());
	console.log('Method: ', req.method);
	console.log('Endpoint: ', req.path);
	next();
});

app.use('/api', RecipeRouter);

app.listen(port, () => {
	console.log(`App is listening on port ${port}... :D`);
});
