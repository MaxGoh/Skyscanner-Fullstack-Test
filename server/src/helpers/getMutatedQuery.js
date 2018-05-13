const getPlace = require('./getPlace');

/**
 * Create a new Query object, replacing Ids with
 *  their respective Objects.
 *
 * @param {Object} results - API Response Object
 *
 * @return
 *   Mutated Query Object
 */
module.exports = function(results) {
  let mutatedQuery = {
    "Country": results.Query.Country,
    "Currency": results.Query.Currency,
    "Locale": results.Query.Locale,
    "Adults": results.Query.Adults,
    "Children": results.Query.Children,
    "Infants": results.Query.Infants,
    "OriginPlace": getPlace(results.Places, parseInt(results.Query.OriginPlace)),
    "DestinationPlace": getPlace(results.Places, parseInt(results.Query.DestinationPlace)),
    "OutboundDate": results.Query.OutboundDate,
    "InboundDate": results.Query.InboundDate,
    "LocationSchema": results.Query.LocationSchema,
    "CabinClass": results.Query.CabinClass,
    "GroupPricing": results.Query.GroupPricing
  };
  return mutatedQuery;
}