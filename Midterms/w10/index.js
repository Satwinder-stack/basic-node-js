// Name: Satwinder R. Jeerh
// Section: WD-303
// Date: August 16, 2025

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const users = [
    { id: 1, name: 'Carmela', email: 'mela@gmail.com', age: 25, salary: 25000 },
    { id: 2, name: 'Joseph', email: 'joe@yahoo.com', age: 30, salary: 45000 },
    { id: 3, name: 'James', email: 'james@msn.com', age: 35, salary: 30000 },
    { id: 4, name: 'John', email: 'john@gmail.com', age: 40, salary: 25000 },
    { id: 5, name: 'Frank', email: 'frank@yahoo.com', age: 45, salary: 45000 },
    { id: 6, name: 'Alex', email: 'alex@msn.com', age: 21, salary: 33000 }
];

app.get('/', (req, res) => {
    res.send("Welcome to the front page!");
});

app.get('/api/users', (req, res) => {
    res.send(users);
});

app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('The user was not found.');
    res.send(user);
});

app.get('/create', (req, res) => {
    res.sendFile(__dirname + '/pages/create.html');
});

app.post('/api/users', (req, res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
        age: parseInt(req.body.age),
        salary: parseInt(req.body.salary)
    };
    users.push(user);
    res.send(user);
});

app.listen(3000, () => console.log('Listening on port 3000'));
