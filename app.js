/* eslint-disable no-undef */
const path = require('path');
const express = require('express');
const Debug = require('debug');

const app = express();
const debug = Debug('dev');

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(process.env.PORT || 2000, () => {
  debug('listening on port 3000');
});
