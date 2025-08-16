const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(express.json());

const dishes = [
    {
        id: 1,
        name: "Adobo"
    },
    {
        id: 2,
        name: "Sinigang"
    },
    {
        id: 3,
        name: "Inihaw"
    },
    {
        id: 4,
        name: "Buro"
    }
];

app.get('/', (req, res) => {
    res.send("My new app!");
});

app.get('/api/dishes', (req, res) => {
    // res.send(['Adobo', 'Sinigang', 'Inihaw', 'Buro'])
    res.send(dishes);
});

app.get('/api/dishes/:id', (req, res) =>{
    // res.send(req.params.id);
    const dish = dishes.find(h => h.id === parseInt(req.params.id));
    if (!dish) return res.status(404).send('The dish was not found.')
    res.send(dish);
});

app.get('/create', (req, res) => {
    // res.send([req.params, req.query]);
    res.sendFile(__dirname + '/pages/' + 'create.html')
});
app.use(bodyParser.urlencoded({extended : false}))
app.post('/api/dishes/', (req, res) => {
    const dish = {
        id: dishes.length + 1,
        name: req.body.dish
    };
    dishes.push(dish);
    res.send(dish);
});

app.listen(3000, () => console.log('Listening on port 3000'));