const express = require('express');
const sequalize = require('./config/connection');
const path = require('path');
const PORT = process.env.PORT || 3001;
const profileRouter = require('./routes/profile');

const app = express();

// app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route for home page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './views/index.html')));

// Route for profile page
app.use('/profile', profileRouter);

app.listen(PORT, () => console.log(`Connected via http://localhost:${PORT}`));