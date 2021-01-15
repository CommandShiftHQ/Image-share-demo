const express = require('express');
const postRouter = require('./routes/post');

const app = express();

app.use(express.json());
app.use(express.static('public'))

app.use('/posts', postRouter);

app.get('*', (_, res) => {
    res.redirect('/');
});

module.exports = app;
