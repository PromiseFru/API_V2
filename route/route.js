const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();

router.post('/', [
    check('content-type')
        .equals('application/json')
        .withMessage('Has to be JSON only')
    ] ,(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
        res.send(req.body)
})

module.exports = router;