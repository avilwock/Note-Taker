// const apiRoutes = require('express').Router();
// const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
// const { v4: uuidv4 } = require ('uuid');


// apiRoutes.get('/', (req, res) => {
//     console.info(`${req.method} request received for api routes`);
//     readFromFile('./db/db.json')
//     .then((data) => res.json(JSON.parse(data)))
//     .catch((error) => {
//         console.error('Error reading from file:', error);
//         res.status(500).send('internal server error'); 
//     });
// });

// apiRoutes.get('/notes/:id', (req, res) => {
//     console.log('data');
//     const requestedNoteId = req.params.id;

//     readFromFile('./db/db.json')
//         .then((data) => {
//             const parsedData = JSON.parse(data);
//             const selectedNote = parsedData.find(note => note.id === requestedNoteId);

//             if (selectedNote) {
//                 res.json(selectedNote);
//             } else {
//                 res.status(404).send('Note not found');
//             }
//         })
//         .catch((error) => {
//             console.error('Error reading from file:', error);
//             res.status(500).send('Internal server error');
//         });
// });


// // New route to retrieve all notes
// apiRoutes.get('/notes', (req, res) => {
//     readFromFile('./db/db.json')
//         .then((data) => res.json(JSON.parse(data)))
//         .catch((error) => {
//             console.error('Error reading from file:', error);
//             res.status(500).send('Internal server error');
//         });
// });


// apiRoutes.post('/', (req, res) => {
//     console.info(`${req.method} request received for apiRoutes`);
    
//     const { title, text } = req.body;

//     if (req.body) {
//         const newTask = {
//             title,
//             text,
//             id: uuidv4(),
//         };

//     readAndAppend(newTask, './db/db.json');
//         res.json('Task added successfully');
//     } else {
//         res.error('Error in adding task');
//     }
// });


// module.exports = apiRoutes;