const getMutatedLeg = require('./getMutatedLeg');
const getAgent = require('./getAgent');

/**
 * Manipulate Itinery object provided by the API, replacing Ids
 * with their respective Objects.
 *
 * @param {*} results - API Response Object
 * @param {*} itinery - Itinery Object
 *
 * @returns
 *  Itinery Object
 */
module.exports = function(results, itinery) {
  let pricingOptions = itinery.PricingOptions.map(pricingOption => {

    let agents = pricingOption.Agents.map(agentId => {
      return getAgent(results.Agents, agentId);
    });

    let mututedPricingOptions = {
      "Agents": agents,
      "DeeplinkUrl": pricingOption.DeeplinkUrl,
      "Price": pricingOption.Price,
      "QuoteAgeInMinutes": pricingOption.QuoteAgeInMinutes
    };
    return mututedPricingOptions;
  });

  let mutatedItinery = {
    "BookingDetailsLink": itinery.BookingDetailsLink,
    "InboundLegId": getMutatedLeg(results, itinery.InboundLegId),
    "OutboundLegId": getMutatedLeg(results, itinery.OutboundLegId),
    "PricingOptions": pricingOptions
  };

  return mutatedItinery;
}