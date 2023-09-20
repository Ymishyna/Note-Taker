// Dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');
const db = require('./db/db.json')
//Allows all notes to have a unique ID
var uniqid = require('uniqid'); 


// Create an express server
const app = express();

// Creating environment variable port
const PORT = process.env.PORT || 3001;


// Parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// Parse incoming JSON data
app.use(express.json());

// Link to assets
app.use(express.static('public'));

// Creating routes
// GET /notes should return the notes.html file
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// GET * should return the index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

  // GET /api/notes should read the db.json file and return all saved notes as JSON
  app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './db/db.json'));
  });


// Listener
app.listen(PORT, () => {
    console.log(`Server available at localhost${PORT}`);
});