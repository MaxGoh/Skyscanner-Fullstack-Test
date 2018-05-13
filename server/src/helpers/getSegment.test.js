const getSegment = require('./getSegment');

describe('getSegment', () => {
  let segments;

  beforeAll(() => {
    segments = [{
      "Id": 0,
      "OriginStation": 11235,
      "DestinationStation": 13880,
      "DepartureDateTime": "2017-05-30T06:50:00",
      "ArrivalDateTime": "2017-05-30T07:55:00",
      "Carrier": 885,
      "OperatingCarrier": 885,
      "Duration": 65,
      "FlightNumber": "290",
      "JourneyMode": "Flight",
      "Directionality": "Outbound"
    }]
  });

  it('should return correct Segment Object with found Id', () => {
    const segment = getSegment(segments, 0);
    expect(segment.Id).toBe(0);
    expect(segment.OriginStation).toBe(11235);
    expect(segment.DestinationStation).toBe(13880);
    expect(segment.DepartureDateTime).toBe("2017-05-30T06:50:00");
    expect(segment.ArrivalDateTime).toBe("2017-05-30T07:55:00");
    expect(segment.Carrier).toBe(885);
    expect(segment.OperatingCarrier).toBe(885);
    expect(segment.Duration).toBe(65);
    expect(segment.FlightNumber).toBe("290");
    expect(segment.JourneyMode).toBe("Flight");
    expect(segment.Directionality).toBe("Outbound");
  });

  it('should return undefined with unfound Id', () => {
    const segment = getSegment(segments, 11236);
    expect(segment).toBeUndefined();
  });

});