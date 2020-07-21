const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded());
app.use(express.json());

app.use(express.static('public'));

app.post('/', (req, res) => {
    res.send(req.body);
})

app.listen(port, () => console.log(`listening on port ${port}`));
