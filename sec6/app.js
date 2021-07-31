const fs = require('fs');
const express = require('express');
const app = express();

// app.get('/', (req, res) => {
//   res
//     .status(200)
//     .json({ message: 'Hello from the server side!', app: 'Natours' });
// });

// // endpoint I can post to
// app.post('/', (req, res) => {
//   res.send('You can post to this endpoint...');
// });

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/david/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tours, // shorthand for tours : tours
    },
  });
});

const tours = fs.app.get('api/v1/tours', (req, res) => {});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
