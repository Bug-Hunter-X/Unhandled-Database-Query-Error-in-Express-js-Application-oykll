const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // This will cause an error if the database query fails
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      // Express's default error handling won't catch this
      console.error(err);
      // This will stop the execution here, even before reaching res.send()
      throw err;
    }
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});