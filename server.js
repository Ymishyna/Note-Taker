// Dependencies
const express = require('express');

// Creating an express server
const app = express();

// Creating environment variable port
const PORT = process.env.PORT || 3001;

// Link to assets
app.use(express.static('public'));
// Parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// Parse incoming JSON data
app.use(express.json());

// Routes files
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);


// Listener
app.listen(PORT, () => {
  console.log(`Server available at localhost${PORT}`);
});