require('dotenv').config()
const Twit = require('twit')

var T = new Twit ({
  consumer_key: TWIT_CONSUMER_KEY,
  consumer_secret: TWIT_CONSUMER_SECRET,
  access_token: TWIT_ACCESS_TOKEN,
  access_token_secret: TWIT_ACCESS_ROKEN_SECRET
})

T.post('statuses/update', { status: "🦦" }, function(err, data, response ) {
  console.log(data)
})

