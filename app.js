const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('My Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
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
