// Name: Satwinder R. Jeerh
// Section: WD-303
// 8/9/2025
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

app.get('/about', (req, res) => {
  res.send('About Page: This is an Express routing example.');
});

app.get('/contact', (req, res) => {
  res.send('Contact Page: You can contact us here.');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
