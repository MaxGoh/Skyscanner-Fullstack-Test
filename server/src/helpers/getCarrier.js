/**
 * Search Array of Carrier Object.
 *
 * @param {Object} carriers - Array of Carrier Object
 * @param {String} id - Id of the Carrier that is being searched
 *
 * @returns
 *   Carrier Object
 */
module.exports = function getCarrier(carriers, id) {
  return carriers.find(carrier => carrier.Id === id);
}