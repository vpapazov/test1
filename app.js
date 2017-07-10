let http = require('http');
let express = require('express');
let bodyParser =  require('body-parser');
let hostname = 'localhost';
let port = 3000;
let app = express();
let router = express.Router();
let movies = require('./movies');
let users = require('./users');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.end();
})

app.use('/movies', movies);
app.use('/users', users);
module.exports = router;


app.post('/', (req, res) => {
  res.send(req.body);
})

app.put('/', (req, res) => {
  res.send('im a PUT request');
})

app.delete('/', (req, res) => {
  res.send('im a DELETE request');
})

app.listen(port, () => {
  console.log('server connected');
})
