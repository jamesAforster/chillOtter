require('dotenv').config();
const Twit = require('twit');

var T = new Twit ({
  consumer_key: process.env.TWIT_CONSUMER_KEY,
  consumer_secret: process.env.TWIT_CONSUMER_SECRET,
  access_token: process.env.TWIT_ACCESS_TOKEN,
  access_token_secret: process.env.TWIT_ACCESS_TOKEN_SECRET
});

var postOtter = () => { T.post('statuses/update', { status: tweet.join('') }, function(err, data, response ) {
  console.log(data)
  });
};

var tweet = [
  [["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"]],
  [["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"]],
  [["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"]],
  [["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"]],
  [["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"]],
  [["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"]],
  [["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"]]
]

var insertOtter = () => {
  let otter = "🦦"
  string = ""
  x = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
  y = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  tweet[y][x] = otter
  tweet[y].pop();
  
  tweet.forEach(char => { 
    string += char.join('')  
    string += "\n"
  })

  console.log(string)
};


insertOtter();
