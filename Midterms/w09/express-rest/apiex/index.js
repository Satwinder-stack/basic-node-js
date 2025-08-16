// Name: Satwinder R. Jeerh
// Section: WD-303
// Date: August 16, 2025

const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(express.json());

const books = [
    {
        id: 1,
        name: "Book1"
    },
    {
        id: 2,
        name: "Book2"
    },
    {
        id: 3,
        name: "Book3"
    },
    {
        id: 4,
        name: "Book4"
    }
];

app.get('/', (req, res) => {
    res.send("Welcome to the Library!");
});

app.get('/api/books', (req, res) => {
    res.send(books);
});

app.get('/api/books/:id', (req, res) =>{
    // res.send(req.params.id);
    const book = books.find(h => h.id === parseInt(req.params.id));
    if (!book) return res.status(404).send('The book was not found.')
    res.send(book);
});

app.get('/create', (req, res) => {
    // res.send([req.params, req.query]);
    res.sendFile(__dirname + '/pages/' + 'create.html')
});
app.use(bodyParser.urlencoded({extended : false}))
app.post('/api/books/', (req, res) => {
    const book = {
        id: books.length + 1,
        name: req.body.book
    };
    books.push(book);
    res.send(book);
});

app.listen(3000, () => console.log('Listening on port 3000'));