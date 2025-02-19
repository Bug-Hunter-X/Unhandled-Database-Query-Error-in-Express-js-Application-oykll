const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  try {
    db.query('SELECT * FROM users', (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Database error');
      }
      res.send(results);
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    res.status(500).send('Internal server error');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});