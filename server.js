// lets create a server with express
const express = require('express');
const app = express();

// lets make the PORT configurable
const PORT = process.env.PORT || 3000;

// lets create a route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// lets start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
