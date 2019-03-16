const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// BodyParser middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB

mongoose
  .connect(db, { useNewUrlParser: true} )
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Use routes
app.use('/api/items', items);

// Connect to port
const port = process.env.port || 5000;

app.listen(port, () => console.log(`server began on port ${port}`));
