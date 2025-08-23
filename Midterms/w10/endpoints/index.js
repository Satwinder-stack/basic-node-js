// Name: Satwinder R. Jeerh
// Section: WD-303
// Date: August 16, 2025

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use('/pages', express.static(__dirname + '/pages'));
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

// Root route
app.get('/', (req, res) => {
    res.send("User management app!");
});

// Get all users
app.get('/api/users', (req, res) => {
    res.send(users);
});


// Serve Update User form
app.get('/api/users/update', (req, res) => {
    res.sendFile(__dirname + '/pages/update.html');
});

// Update user (POST)
app.post('/api/users/update', (req, res) => {
    console.log('Request body:', req.body);
    const userId = parseInt(req.body.id);
    console.log('Parsed user ID:', userId);

    const user = users.find(u => u.id === userId);
    if (!user) {
        console.log('User not found for ID:', userId);
        return res.status(404).send('User no found.');
    }

    user.name = req.body.name;
    user.email = req.body.email;
    user.age = parseInt(req.body.age);
    user.salary = parseInt(req.body.salary);

    res.send(user);
});


// Delete user by id (GET for simplicity)
app.get('/api/users/:id/delete', (req, res) => {
    const index = users.findIndex(u => u.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send('User not found.');

    const deletedUser = users.splice(index, 1);
    res.send(deletedUser[0]);
});


// Serve Add User form
app.get('/api/users/add', (req, res) => {
    res.sendFile(__dirname + '/pages/add.html');
});


// Get user by id
app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('The user wa not found.');
    res.send(user);
});

// Add new user (POST)
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
