const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (request, response) => {

    response.json({
        message:"Hello, world!"
    });
});

const UserRouter = require('./controllers/UserController')
app.use('/users', UserRouter);

module.exports = { app }