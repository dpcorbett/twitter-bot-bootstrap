const unirest = require('unirest')

/*
  Get a new API key at https://market.mashape.com/vivekn/sentiment-3
*/

var sentiment = {}

sentiment.init = function () {
  return unirest.post('https://text-sentiment.p.rapidapi.com/analyze')
  .header('X-RapidAPI-Key', process.env.SENTIMENT_KEY)
  .header('Content-Type', 'application/x-www-form-urlencoded')
  .header('Accept', 'application/json')
}

module.exports = sentiment
