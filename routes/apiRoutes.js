// Dependencies 
const path = require('path');
const fs = require('fs')
// Allows all notes to have a unique ID
var uniqid = require('uniqid');

// API routes
module.exports = (app) => {

    // GET /api/notes should read the db.json file and return all saved notes as JSON
    app.get('/api/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../db/db.json'));
    });

    // POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client 
    app.post('/api/notes', (req, res) => {
        let db = fs.readFileSync('db/db.json');
        db = JSON.parse(db);
        // body for a note
        let userNote = {
            title: req.body.title,
            text: req.body.text,
            // unique id for a note
            id: uniqid(),
        };
        // pushing new note to db.json 
        db.push(userNote);
        fs.writeFileSync('db/db.json', JSON.stringify(db));
        res.json(db);
    });

    // DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete
    app.delete('/api/notes/:id', (req, res) => {
        // reading notes from db.json
        let db = JSON.parse(fs.readFileSync('db/db.json'))
        // removing note by id
        let deleteNotes = db.filter(item => item.id !== req.params.id);
        // rewriting note to db.json
        fs.writeFileSync('db/db.json', JSON.stringify(deleteNotes));
        res.json(deleteNotes);
    })
};