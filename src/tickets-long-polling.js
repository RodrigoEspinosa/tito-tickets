const fetchTickets = require('./fetch-tickets')

// Get the time between requests, should be something between 1000 and 2000.
const { TITO_REQUEST_TIMEOUT_MS = 2000 } = process.env

/**
 * Continuously fetch tickets from
 * tito and emit the websockets events.
 *
 * @param  {Object} io The socket.io object to `emit` the events.
 */
const ticketsLongPollingLoop = io =>
  setTimeout(async () => {
    // Fetch the events from tito.
    const tickets = await fetchTickets()

    // Emit the tickets to all the websockets connections.
    io.emit('tickets', tickets)

    // Execute the same function to continue sending information.
    return ticketsLongPollingLoop(io)
  }, TITO_REQUEST_TIMEOUT_MS)

module.exports = {
  start: io => ticketsLongPollingLoop(io)
}
