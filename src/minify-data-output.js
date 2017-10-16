/**
 * Get the `attributes` object for the ticket.
 * Returns an empty object if the `attributes` attribute was not found.
 * @param  {Object} ticket
 * @return {Object}
 */
const getAttributes = ticket => ticket.attributes || {}

/**
 * Get the attribute from the ticket `attributes` object.
 * @param  {Object} ticket
 * @param  {String} attr
 * @return {Object}
 */
const getAttribute = (ticket, attr) => getAttributes(ticket)[attr]

module.exports = ticket => ({
  id: ticket.id,
  price: getAttribute(ticket, 'price'),
  state: getAttribute(ticket, 'state'),
  title: getAttribute(ticket, 'title'),
  startAt: getAttribute(ticket, 'start-at'),
  quantity: getAttribute(ticket, 'quantity'),
  quantitySold: getAttribute(ticket, 'quantity-sold')
})
