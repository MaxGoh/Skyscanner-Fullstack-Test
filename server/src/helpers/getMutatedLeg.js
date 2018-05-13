const getCarrier = require('./getCarrier');
const getPlace = require('./getPlace');
const getSegment =require('./getSegment');

/**
 * Manipulate Leg object provided by the API, replacing Ids
 * with their respective Objects.
 *
 * @param {Object} results - API Response Object
 * @param {String} id - Leg Id
 *
 * @returns
 *   Leg Object
 */
module.exports = function(results, id) {
  let leg = results.Legs.find(leg => leg.Id === id);

  if (leg) {
    let carriers = leg.Carriers.map(carrierId => {
      return getCarrier(results.Carriers, carrierId);
    });

    let operatingCarriers = leg.OperatingCarriers.map(operatingCarrierId => {
      return getCarrier(results.Carriers, operatingCarrierId);
    });

    let stops = leg.Stops.map(stopId => {
      return getPlace(results.Places, stopId);
    });

    let segments = leg.SegmentIds.map(segmentId => {
      return getSegment(results.Segments, segmentId);
    });

    let mutatedLegObject = {
      "Arrival": leg.Arrival,
      "Carriers": carriers,
      "Departure": leg.Departure,
      "DestinationStation": getPlace(results.Places, leg.DestinationStation),
      "Directionality": leg.Directionality,
      "Duration": leg.Duration,
      "FlightNumbers": leg.FlightNumbers,
      "Id": leg.Id,
      "JourneyMode": leg.JourneyMode,
      "OperatingCarriers": operatingCarriers,
      "OriginStation": getPlace(results.Places, leg.OriginStation),
      "SegmentIds": segments,
      "Stops": stops,
    };

    return mutatedLegObject;
  }

  return null;
}