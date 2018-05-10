require('isomorphic-fetch');
require('es6-promise').polyfill();

const express = require('express');
const app = express();
const api = require('./api/');
const _ = require('lodash');
const helpers = require('./helpers');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

/**
  Simple flight search api wrapper.

  TODO: client should provide params

  Api params and location values are here:
  http://business.skyscanner.net/portal/en-GB/Documentation/FlightsLivePricingQuickStart
*/
app.get('/api/search', (req, res) => {

  api.livePricing.search(req.query)
  .then((results) => {
    // TODO - a better format for displaying results to the client

    let itineries = _.map(results.Itineraries, itinery => {
      itinery.InboundLegId = helpers.getInboundLeg(results, itinery.InboundLegId);
      itinery.OutboundLegId = helpers.getInboundLeg(results, itinery.OutboundLegId);
      itinery.PricingOptions[0].Agent = helpers.getAgent(results.Agents, itinery.PricingOptions[0].Agents[0]);
      return itinery;
    })

    let query = results.Query;

    query.OriginPlace = helpers.getPlace(results.Places, parseInt(query.OriginPlace));
    query.DestinationPlace = helpers.getPlace(results.Places, parseInt(query.DestinationPlace));

    let result = {
      'Query': query,
      'Itineries': itineries,
      'Currencies': results.Currencies[0]
     };

    res.json(result);
  })
  .catch(console.error);

});

app.listen(4000, () => {
  console.log('Node server listening on http://localhost:4000');
});