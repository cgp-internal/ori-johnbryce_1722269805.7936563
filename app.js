const express = require('express');
const app = express();
const helloWorldRouter = require('./routes/helloWorld.js').helloWorldRouter;

app.use('/helloWorld', helloWorldRouter);

app.listen(3000, () => {
    console.log('Server is up and running on port 3000');
});