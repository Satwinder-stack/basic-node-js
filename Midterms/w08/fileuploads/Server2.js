// Name: Satwinder R. Jeerh
// Section: WD-303
// 8/9/2025

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  const name = req.query.name || 'Guest';
  res.send(`Hello, ${name}!`);
});

app.get('/hello/:name', (req, res) => {
  res.send(`Hello, ${req.params.name}!`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
