const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const dbFilePath = path.join(__dirname, '../db/db.json');

// Load data from db.json
const loadData = () => {
  try {
    const rawData = fs.readFileSync(dbFilePath);
    return JSON.parse(rawData);
  } catch (error) {
    return [];
  }
};

// Save data to db.json
const saveData = (data) => {
  fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2));
};

module.exports = function (app) {
  app.get('/api/notes', (req, res) => {
    const data = loadData();
    res.json(data);
  });

  app.get('/api/notes/:id', (req, res) => {
    const textId = req.params.id;
    const data = loadData();
    const selectedNote = data.find(note => note.id ===textId);

    if (selectedNote) { 
      res.json(selectedNote);
      } else {
        res.status(404).send('Note not found');
      }
  })

  app.post('/api/notes', (req, res) => {
    const newNote = {
      title: req.body.title,
      text: req.body.text,
      id: uuidv4(),
    };

    const data = loadData();
    data.push(newNote);

    saveData(data);

    res.json(newNote);
  });

  app.post('/api/submit', (req, res) => {
    const submittedData = {
      title: req.body.title,
      text: req.body.text,
      id: uuidv4(),
    };

    const data = loadData();
    data.push(submittedData);

    saveData(data);

    // Assuming there's a callback function in your JavaScript handling the form submission
    // You can customize the response based on your needs
    res.send('<script>window.location.href="/";</script>');
  });

  // Additional routes can go here
};