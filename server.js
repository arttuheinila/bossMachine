const express = require('express');
const app = express();

module.exports = app;
app.use(express.static(__dirname))

const PORT = process.env.PORT || 4001;

// Add middleware for handling CORS requests from index.html
const cors = require('cors')
app.use(cors())

// Add middware for parsing request bodies here:
const bodyParser = require('body-parser')
app.use(bodyParser.json())

// Mount your existing apiRouter below at the '/api' path.
const apiRouter = require('./server/api');
app.use('/api', apiRouter)

// Conditional for testing purposes:
if (!module.parent) { 
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
}
