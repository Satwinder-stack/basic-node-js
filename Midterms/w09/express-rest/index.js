const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("My new app!");
});

app.get('/api/dishes', (req, res) => {
    res.send(['Adobo', 'Sinigang', 'Inihaw', 'Buro'])
});

app.get('/api/dishes/:id', (req, res) =>{
    res.send(req.params.id);
});

app.listen(3000, () => console.log('Listening on port 3000'));