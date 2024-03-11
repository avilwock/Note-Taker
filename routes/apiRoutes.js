const apiRoutes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require ('uuid');


apiRoutes.get('/', (req, res) => {
    console.info(`${req.method} request received for api routes`);
    readFromFile('./db/db.json')
    .then((data) => res.json(JSON.parse(data)))
    .catch((error) => {
        console.error('Error reading from file:', error);
        res.status(500).send('internal server error'); 
    });
});

apiRoutes.post('/', (req, res) => {
    console.info(`${req.method} request received for apiRoutes`);
    
    const { title, text } = req.body;

    if (req.body) {
        const newTask = {
            title,
            text,
            text_id: uuidv4(),
        };

    readAndAppend(newTask, './db/db.json');
        res.json('Task added successfully');
    } else {
        res.error('Error in adding task');
    }
});


module.exports = apiRoutes;