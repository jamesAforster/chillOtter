require('dotenv').config();
const Twit = require('twit');

var T = new Twit ({
  consumer_key: process.env.TWIT_CONSUMER_KEY,
  consumer_secret: process.env.TWIT_CONSUMER_SECRET,
  access_token: process.env.TWIT_ACCESS_TOKEN,
  access_token_secret: process.env.TWIT_ACCESS_TOKEN_SECRET
});

var postOtter = async () => { T.post('statuses/update', { status: await insertOtter() }, function(err, data, response ) {
  console.log(data)
  });
};

var tweet = [
  [["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"]],
  [["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"]],
  [["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"]]
];

var insertOtter = () => {
  let string = ""
  let otter = "🦦"
  x = Math.floor(Math.random() * Math.floor(2));
  y = Math.floor(Math.random() * Math.floor(18));

  tweet[x][y] = otter
  tweet[x].pop();
  
  tweet.forEach(char => { 
    string += char.join('')  
    string += "\n"
  });
  return string
};

var getTweets = () => { T.get('search/tweets', { q: 'otter since:2011-07-11', count: 10 }, function(err, data, response) {
  console.log(data.statuses[0])
  });
};

getTweets();

