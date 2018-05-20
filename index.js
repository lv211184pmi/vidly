const Joi = require('joi');
const express = require('express');
const app = express();
const genres = require('./routes/genres');

app.use(express.json());
app.use('./api/genres', genres);

const port = process.env.port || 3000;
app.listen(3000, () => console.log(`Listening on port ${port}...`));
