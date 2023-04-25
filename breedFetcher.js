const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  // Build the API endpoint URL with the breed name as the query parameter
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  // Make a request to the API endpoint
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    // Parse the response body to get an object representing the data
    const data = JSON.parse(body);

    // Check if the data array is empty
    if (data.length === 0) {
      callback(`Breed '${breedName}' not found`, null);
      return;
    }

    // Get the first entry in the data array
    const breed = data[0];

    //call the callbacks
    callback(null, breed.description);

  });

};
module.exports = { fetchBreedDescription };