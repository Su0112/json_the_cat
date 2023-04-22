const request = require('request');

const breedName = 'siberian';
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, (error, response, body) => {
  if (error) {
    console.log('Error:', error);
  } else if (response.statusCode !== 200) {
    console.log('Status:', response.statusCode);
  } else {
    const data = JSON.parse(body);
    console.log(data);
  }
});
