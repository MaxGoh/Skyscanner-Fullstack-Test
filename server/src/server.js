require('isomorphic-fetch');
require('es6-promise').polyfill();

const express = require('express');
const app = express();
const api = require('./api/');
const getMutatedItinery = require('./helpers/getMutatedItinery');
const getMutatedQuery = require('./helpers/getMutatedQuery');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/search', (req, res) => {

  api.livePricing.search(req.query)
  .then((results) => {

    let itineries = results.Itineraries.map(itinery => {
      return getMutatedItinery(results, itinery);
    })

    let result = {
      'Query': getMutatedQuery(results),
      'Itineries': itineries,
      'Currencies': results.Currencies
    };

    res.json(result);
  })
  .catch(console.error);
});

app.listen(4000, () => {
  console.log('Node server listening on http://localhost:4000');
});
