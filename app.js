const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('My Hello World!')
})

if (module === require.main) {
  // [START server]
    // Start the server
  const server = app.listen(process.env.PORT || 8081, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
    // [END server]
}
module.exports = app;
