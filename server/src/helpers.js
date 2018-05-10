module.exports.getInboundLeg = (results, id) => {
  let leg = results.Legs.find(leg => leg.Id === id);

  leg.Segment = this.getSegment(results.Segments, leg.SegmentIds[0]);
  leg.Destination = this.getPlace(results.Places, leg.DestinationStation);
  leg.Origin = this.getPlace(results.Places, leg.OriginStation);

  return leg;
}

module.exports.getSegment = (segments, id) => {
  return segments.find(segment => segment.Id === id);
}

module.exports.getPlace = (places, id) => {
  return places.find(place => place.Id === id);
}

module.exports.getAgent = (agents, id) => {
  return agents.find(agent => agent.Id === id);
}