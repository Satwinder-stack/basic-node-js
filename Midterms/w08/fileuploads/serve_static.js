// Name: Satwinder R. Jeerh
// Section: WD-303
// 8/9/2025
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Static file server running at http://localhost:${PORT}`);
});
