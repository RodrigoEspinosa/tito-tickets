const fetch = require('isomorphic-fetch')

const minifyDataOutput = require('./minify-data-output')

// All this variables should be present.
const { TITO_TOKEN, TITO_API_BASE_URL, TITO_ACCOUNT, TITO_EVENT } = process.env

// If the `MINIFY_DATA_OUTPUT` flag is present, the
// server will compact the output from tito before sending it.
const { MINIFY_DATA_OUTPUT } = process.env

// Url to get the tickets from.
const TICKETS_URL = `${TITO_API_BASE_URL}/${TITO_ACCOUNT}/${TITO_EVENT}/releases`

// Set the headers containing the tito token.

const headers = new Headers()
headers.append('Accept', 'application/vnd.api+json')
headers.append('Authorization', `Token token=${TITO_TOKEN}`)

// Set the options for the fetch, contaning the headers.
const options = {
  headers,
  mode: 'cors',
  method: 'GET',
  cache: 'default'
}

/**
 * Async function that get the tickets for the events
 * (tito calls it "releases") and return them as json.
 * @return {Promise}
 */
module.exports = async () => {
  try {
    const response = await fetch(TICKETS_URL, options)
    const tickets = await response.json()

    // Process the tickets.
    return process.env.MINIFY_DATA_OUTPUT
      ? tickets.data.map(minifyDataOutput)
      : tickets.data
  } catch (error) {
    return `There was an error: ${error.message}`
  }
}
