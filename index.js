require('dotenv').config();
const Twit = require('twit');

var T = new Twit ({
  consumer_key: process.env.TWIT_CONSUMER_KEY,
  consumer_secret: process.env.TWIT_CONSUMER_SECRET,
  access_token: process.env.TWIT_ACCESS_TOKEN,
  access_token_secret: process.env.TWIT_ACCESS_TOKEN_SECRET
});

var postOtter = () => { T.post('statuses/update', { status: tweet.join("") }, function(err, data, response ) {
  console.log(data)
  });
};

var tweet = [
  [["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"], ["\n"]],
  [["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"], ["\n"]],
  [["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"], ["\n"]],
  [["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"], ["\n"]],
  [["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"], ["\n"]],
  [["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"], ["\n"]],
  [["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"]]
]

var insertOtter = () => {
  let otter = "🦦"
  y = Math.floor(Math.random() * 7)
  x = Math.floor(Math.random() * 10)
  tweet[0][x][y] = otter
};


insertOtter();
postOtter();
