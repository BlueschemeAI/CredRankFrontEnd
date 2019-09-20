var express = require('express')
var request = require("request");

const app = express()
const port = 3000
app.use(express.json())
app.get('/', (req, res) => 
{
  res.send('Hello World!')
})
app.post('/login', function (req, res) {
  console.log("req.body",req.body)
  console.log(res)
  var options = { method: 'POST',
    url: 'http://18.140.63.170:8000/api/v1/login',
    headers: 
     { 'Postman-Token': '4cdc5624-290f-4e8e-b188-297d63c3f5c2',
       'cache-control': 'no-cache',
       "Content-Type" : "application/json" },
       body: req.body,
       json: true 
      };

    request(options, function (error, response, body) {
          if (error) throw new Error(error);
          console.log(response.statusMessage)
          console.log(response.statusCode)
          console.log(response)
          res.send(response);
          return body;
        });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))