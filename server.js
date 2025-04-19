const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express(); // <== app is created here FIRST
const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Use routes
app.use('/admin', require('./routes/admin'));
app.use('/api', require('./routes/api'));

// Default route
app.get('/', (req, res) => {
  res.send('Home Page');
});

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch(err => console.log('MongoDB connection error:', err));
