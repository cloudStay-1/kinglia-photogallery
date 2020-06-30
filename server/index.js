/* eslint-disable import/newline-after-import */
/* eslint-disable no-console */
const express = require('express');
const app = express();
const port = 3004;
const bodyParser = require('body-parser');
const Controllers = require('./Controllers.js');

app.use(bodyParser.json());
app.use(express.static('./client/dist'));

app.get('/api/:roomId/photogallery', (req, res) => {
  Controllers.getPhotos(req, res);
});

app.post('/api/:roomId/photogallery', (req, res) => {
  Controllers.postSaveToList(req, res);
});

app.put('/api/:roomId/photogallery', (req, res) => {
  Controllers.updateSaveToList(req, res);
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
