// Name: Satwinder R. Jeerh
// Section: WD-303
// 8/9/2025
const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 3000;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, 'uploads'));
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
  

const upload = multer({ storage: storage });

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/file-upload.html');
});

app.post('/file_upload', upload.single('file'), (req, res) => {
  console.log('Uploaded file:', req.file);
  res.end(`File ${req.file.originalname} uploaded successfully`);
});

app.listen(PORT, () => {
  console.log(`File upload app running at http://localhost:${PORT}`);
});
