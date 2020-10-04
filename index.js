require('dotenv').config();
require('node-schedule');
const Twit = require('twit');

var T = new Twit ({
  consumer_key: process.env.TWIT_CONSUMER_KEY,
  consumer_secret: process.env.TWIT_CONSUMER_SECRET,
  access_token: process.env.TWIT_ACCESS_TOKEN,
  access_token_secret: process.env.TWIT_ACCESS_TOKEN_SECRET
});

var postOtter = () => { T.post('statuses/update', { status: "🦦" }, function(err, data, response ) {
  console.log(data)
  });
}

var dailyJob = schedule.scheduleJob('* 8 * * *', function() {
  postOtter();
})
