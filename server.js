// Dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');
const db = require("./db/db.json")


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





// Listener
app.listen(PORT, () => {
    console.log(`Server available at localhost${PORT}`);
  });