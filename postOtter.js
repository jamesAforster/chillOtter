require('dotenv').config();
const Twit = require('twit');

var T = new Twit ({
  consumer_key: process.env.TWIT_CONSUMER_KEY,
  consumer_secret: process.env.TWIT_CONSUMER_SECRET,
  access_token: process.env.TWIT_ACCESS_TOKEN,
  access_token_secret: process.env.TWIT_ACCESS_TOKEN_SECRET
});


var postOtter = () => {
  T.post('statuses/update', { status: generateString() }, function(err, data, response ) {
    console.log(data)
  });
}

var tweet = [
  [["🌾"],["🌾"],["🌾"],["🌾"],["🌾"],["🌾"],["🌾"], ["🌾"], ["🌾"] ,["🌾"]],
  [["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"]],
  [["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"]],
  [["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"]],
  [["🌾"],["🌾"],["🌾"],["🌾"],["🌾"],["🌾"],["🌾"], ["🌾"], ["🌾"] ,["🌾"]],
];

var generateString = () => {
  insertOtter();
  let string = ""
  tweet.forEach(e => {  
    string += e.join('')  
    string += "\n"
  });
  return string;
};

var insertOtter = () => {
  coordinates = getRandomArrayCoordinates()
  tweet[coordinates.x][coordinates.y] = "🦦";
  tweet[x].pop();
};

var getRandomArrayCoordinates = () => {
  x = Math.floor(Math.random() * Math.floor(3) +1);
  y = Math.floor(Math.random() * Math.floor(18));
  return {x: x, y: y}
}

postOtter();
