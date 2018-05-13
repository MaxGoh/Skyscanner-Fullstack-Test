const getMutatedLeg = require('./getMutatedLeg');
const mockResult = require('./mockResult');

describe('getMutatedLeg', () => {
  let results;

  beforeAll(() => {
    results = mockResult;
    return results;
  });

  it('should return a MutatedLeg object with found Id', () => {
    const mutatedLeg = getMutatedLeg(results, "11235-1705300650--32302,-32480-1-13554-1705301100");

    expect(mutatedLeg.Arrival).toBe("2017-05-30T11:00:00");
    expect(mutatedLeg.Departure).toBe("2017-05-30T06:50:00");
    expect(mutatedLeg.Directionality).toBe("Outbound");
    expect(mutatedLeg.Duration).toBe(250);
    expect(mutatedLeg.Id).toBe("11235-1705300650--32302,-32480-1-13554-1705301100");
    expect(mutatedLeg.JourneyMode).toBe("Flight");

    expect(typeof mutatedLeg.Carriers).toBe("object");
    expect(typeof mutatedLeg.DestinationStation).toBe("object");
    expect(typeof mutatedLeg.FlightNumbers).toBe("object");
    expect(typeof mutatedLeg.OperatingCarriers).toBe("object");
    expect(typeof mutatedLeg.OriginStation).toBe("object");
    expect(typeof mutatedLeg.SegmentIds).toBe("object");
    expect(typeof mutatedLeg.Stops).toBe("object");
  });

  it('should return null with unfound Id', () => {
    const mutatedLeg = getMutatedLeg(results, "11235-1705300650--32302,-32481-1-13554-1705301100");
    expect(mutatedLeg).toBeNull();
  });

});