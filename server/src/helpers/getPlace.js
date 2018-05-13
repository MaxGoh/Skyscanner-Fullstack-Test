/**
 * Search Array of Place Object.
 *
 * @param {Object} places - Array of Place Object
 * @param {String} id - Id of the Place that is being searched
 *
 * @returns
 *   Place Object
 */
module.exports = function(places, id) {
  return places.find(place => place.Id === id);
}