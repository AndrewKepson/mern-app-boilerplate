const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
//Tell Heroku to use either its own port or, if not available, fall back to port 8080
const PORT = process.env.PORT || 8080;

//Morgan is an HTTP request logger which will log all requests in the terminal as we run our dev server
app.use(morgan('tiny'));

//Define routes:
app.get('', (req, res) => {
    const data = {
        username: 'andrewkepson',
        age: 5
    };
    res.json(data);
})

//Tell express to listen to the port for HTTP requests
app.listen(PORT, console.log(`Server is starting on port: ${PORT}`));