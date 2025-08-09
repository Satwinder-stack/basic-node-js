// Name: Satwinder R. Jeerh
// Section: WD-303
// 8/9/2025
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/post_form.html');
});

app.post('/process_post', (req, res) => {
  const response = {
    first_name: req.body.first_name,
    last_name: req.body.last_name
  };
  res.send(response);
});

app.listen(PORT, () => {
  console.log(`POST Form app running at http://localhost:${PORT}`);
});
