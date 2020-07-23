const express = require('express');
const { userValidationRules, validate } = require('../controls/validate.js')
const router = express.Router();

router.post('/', userValidationRules(), validate,(req, res) => {
        res.send(req.body)
})

module.exports = router;