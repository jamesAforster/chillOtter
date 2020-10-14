require('dotenv').config();
const Twit = require('twit');

var T = new Twit ({
  consumer_key: process.env.TWIT_CONSUMER_KEY,
  consumer_secret: process.env.TWIT_CONSUMER_SECRET,
  access_token: process.env.TWIT_ACCESS_TOKEN,
  access_token_secret: process.env.TWIT_ACCESS_TOKEN_SECRET
});


replyToTweet = () => { 
  T.get('search/tweets', { q: 'otter', count: 20 }, function(err, data, response) {
    tweetData = data.statuses[5]
    postReply(tweetData)
  })
}

postReply = (tweetData) => { 
  T.post('statuses/update', { status: generateReply(tweetData), in_reply_to_status_id: tweetData.id_str }, function(err, data, response) {
    console.log(data)
  })
}

var tweet = [
  [["🌾"],["🌾"],["🌾"],["🌾"],["🌾"],["🌾"],["🌾"], ["🌾"], ["🌾"] ,["🌾"]],
  [["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"]],
  [["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"]],
  [["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"],["~"]],
  [["🌾"],["🌾"],["🌾"],["🌾"],["🌾"],["🌾"],["🌾"], ["🌾"], ["🌾"] ,["🌾"]],
];

var generateReply = (replyTweet) => {
  insertOtter();
  let string = ""
  tweet.forEach(e => { 
    string += e.join('')  
    string += "\n"
  });
  return string + `\n\n did someone say otter? @${replyTweet.user.screen_name}`;
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

replyToTweet()
