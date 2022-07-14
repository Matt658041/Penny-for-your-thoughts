const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://world-of-quotes.p.rapidapi.com/v1/quotes/quote-of-the-day',
  params: {category: 'inspirational'},
  headers: {
    'X-RapidAPI-Key': '6744f82751mshc3605f6521c8a9cp1ebe17jsn36d4d832059b',
    'X-RapidAPI-Host': 'world-of-quotes.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});