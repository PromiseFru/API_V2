const express = require('express');
const { userValidationRules, validate } = require('./controls/validate.js')
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

const router = require('./route/route.js')

app.use('/', userValidationRules(), validate, router);

app.listen(port, () => console.log(`listening on port ${port}`));
