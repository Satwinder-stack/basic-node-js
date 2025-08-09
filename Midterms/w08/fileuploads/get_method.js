// Name: Satwinder R. Jeerh
// Section: WD-303
// 8/9/2025
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/get_form.html');
});

app.get('/process_get', (req, res) => {
  const response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

app.listen(PORT, () => {
  console.log(`GET method app listening at http://localhost:${PORT}`);
});
