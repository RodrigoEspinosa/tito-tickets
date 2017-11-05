const micro = require('micro')

const fetchTickets = require('./src/fetch-tickets')
const ticketsLongPolling = require('./src/tickets-long-polling')

// CREATE THE SERVER USING MICRO.
//
// This is for the initial handshake and return the
// first state of the ticket (tito calls it "releases").
const server = micro(async (req, res) => {
  return fetchTickets()
})

// Open the websockets using the server created with `micro`.
const io = require('socket.io')(server)

// Start doing the request to tito and send the events with socket-io.
ticketsLongPolling.start(io)

// Open the connections at a configurable port, 3000 by default.
server.listen(process.env.PORT || 3000)
