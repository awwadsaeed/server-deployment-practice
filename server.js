'use strict';
const express = require('express');
const app = express();
const errorHandler = require('./error-handlers/500.js');
const notFoundHandler = require('./error-handlers/404.js');
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/bad', (req, res) => {
    throw new Error('something went wrong');
});
app.use('*', notFoundHandler);
app.use(errorHandler);
function start(port) {
    app.listen(port, () => {
        console.log(`listening on PORT ${port}`);
    });
}
module.exports = {
    app, start,
};