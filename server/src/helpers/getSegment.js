/**
 * Search Array of Segment Object.
 *
 * @param {Object} segments - Array of Segment Object
 * @param {String} id - Id of the Segment that is being searched
 *
 * @returns
 *   Segment Object
 */
module.exports = function(segments, id) {
  return segments.find(segment => segment.Id === id);
}
