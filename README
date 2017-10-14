# Tito Tickets

Get a streaming of the tickets status using websockets for your ti.to event.

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/RodrigoEspinosa/tito-tickets)

---

Simple server built with `micro` that exposes a websocket (with `socket.io`) streaming of your tickets sales.

Useful for building process bar or things like that.


## `.env`

Please, don't forget to add a `.env` with the following variables before deploying.

```bash
TITO_TOKEN=
TITO_API_BASE_URL=https://api.tito.io/v2
TITO_ACCOUNT=
TITO_EVENT=
```

As it says on the [Tito API](http://teamtito.github.io/tito-api-docs/#introduction), you can get your tito token from from [api.tito.io](https://api.tito.io/).
(Copy the value in `Your API key is XXXXXXXXXXXXXXXXXXXX.`)


## Additional options

Also to specify as env vars.

```bash
PORT=3000                     # The port is 3000 by default.
MINIFY_DATA_OUTPUT=true       # Minifies the output of tito.
TITO_REQUEST_TIMEOUT_MS=2000  # Time before each request, 2 seconds by default.
```

The `MINIFY_DATA_OUTPUT` option will respond with a json like this:

```json
{
  "price": null,
  "state": "on_sale",
  "title": "LALALA Conf - Batch A",
  "quantity": 3,
  "quantitySold": 0
},
{
  "price": null,
  "state": "on_sale",
  "title": "LALALA Conf - Batch B",
  "quantity": 20,
  "quantitySold": 0
}
```


----

### LICENSE

MIT License

Copyright (c) 2017 Rodrigo Espinosa

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
