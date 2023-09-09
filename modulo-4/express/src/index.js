const express = require('express');
const app = express();
const router = require('./rotas');

app.listen(3333);

app.use('/',router);


