const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const genres = [
    {id: 1, name: "commedy"},
    {id: 2, name: "fantasy"},
    {id: 3, name: "action"},
    {id: 4, name: "detective"}
];

app.get('/api/genres', (req, res) => {
    if(!genres) return res.status(404).send('resource not found');
    res.send(genres);
});

app.post('api/genres', (req, res) => {
    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const genre = {
        id: genres.length + 1,
        name: req.body.name
    };

    genres.push(genre);
    res.send(genre);
});

const port = process.env.port || 3000;

app.listen(3000, () => console.log(`Listening on port ${port}...`));

function validateGenre(genre) {
    const schema = {
        name: Joi.string().min(5).required()
    };
    
    return result = Joi.validate(course, schema);
}