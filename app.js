const express = require('express')
var request = require('request')

const app = express()
app.get('/', function (req, res) {
  res.send('My Hello World!')
})

app.get('/google', function(req, res) {
    console.log('req:', req)
    request("http://www.google.com", function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        res.send(body)
    });
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
