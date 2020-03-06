const express = require('express');
const path = require('path');

const app = express();

// serve static files
const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));

// receive the request from the form and parse it.
// hint: see the nodejs knwoedge base.
// https://nodejs.org/en/knowledge/HTTP/clients/how-to-access-query-string-parameters/

app.get('/users', (req, res) => {
  console.log(req.url);
  // add code here
});

app.listen(3000, () => {
  console.log('server is running on port 3000');
});
