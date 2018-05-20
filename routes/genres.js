const express = require('express');
const router = express.Router();

const genres = [
    {id: 1, name: "commedy"},
    {id: 2, name: "fantasy"},
    {id: 3, name: "action"},
    {id: 4, name: "detective"}
];

router.get('/', (req, res) => {
    if(!genres) return res.status(404).send('resource not found');
    res.send(genres);
});

router.post('/', (req, res) => {
    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const genre = {
        id: genres.length + 1,
        name: req.body.name
    };

    genres.push(genre);
    res.send(genre);
});

router.put('/:id', (req, res) => {
    const genre = genres.find(genre => genre.id === parseInt(req.params.id));
    if(!genre) return res.status(400).send(`genre with ID ${req.params.id} does not exist`);

    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    genre.name = req.body.name;
    res.send(genre);
});

router.delete('/:id', (res, req) => {
    const genre = genres.find(genre => genre.id === parseInt(req.params.id));
    if(!genre) return res.status(400).send(`genre with ID ${req.params.id} does not exist`);

    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const index = genres.indexOf(genre);
    genres.splice(index, 1);

    res.send(course);
});

function validateGenre(genre) {
    const schema = {
        name: Joi.string().min(5).required()
    };
    
    return result = Joi.validate(course, schema);
}

module.exports = router;