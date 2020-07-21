const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    // if(!req.is('application/json')){
    //     res.sendStatus(400);
    // }else{
    //     res.send(req.body);
    // }
    res.send(req.headers["content-type"]);
})

module.exports = router;