/**
 * Search Array of Agent Object.
 *
 * @param {Object} agents - Array of Agent Object
 * @param {String} id - Id of the Agent that is being searched
 *
 * @returns
 *   Agent Object
 */

module.exports= function(agents, id) {
  return agents.find(agent => agent.Id === id);
}