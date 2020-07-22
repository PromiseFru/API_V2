const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();

router.post('/', [
    check('content-type')
        .equals('application/json')
        .withMessage('Data input Has to be JSON only')
    ] ,(req, res) => {
        const myValidationResult = validationResult.withDefaults({
            formatter: (error) => {
              return {
                error: error.msg,
              };
            }
          });

        const errors = myValidationResult(req);
        if (!errors.isEmpty()) {
            res.status(400);
            let errorString = JSON.stringify(errors.array());
            res.send(`<h1><center>${errorString}</h1>`);
        }
        res.send(req.body)
})

module.exports = router;