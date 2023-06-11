const express = require('express');
const app = express();

app.use(express.json());

// debug error handling - catch errors from promises or async code that doesn't provide additional error details
void process.on('unhandledRejection', (reason, p) => {
    console.log(`There is a major error here! Big error:\n` + JSON.stringify(p));
    console.log(`The error happened because of:\n` + reason);
});

app.use((request, response, next) => {
    if (request.errors) {
        next();
    } else {
        request.errors = []
        next();
    }
})

app.get('/', (request, response) => {

    response.json({message:"Hello, world!"});
});

const UserRouter = require('./controllers/UserController')
app.use('/users', UserRouter);

module.exports = { app }