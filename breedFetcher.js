const request = require('request');

// Get the breed name from the command line arguments
const breedName = process.argv[2];

// Build the API endpoint URL with the breed name as the query parameter
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

// Make a request to the API endpoint
request(url, (error, response, body) => {
  if (error) {
    console.error(`Error making request: ${error}`);
    return;
  }

  // Parse the response body to get an object representing the data
  const data = JSON.parse(body);

  // Check if the data array is empty
  if (data.length === 0) {
    console.log(`Breed '${breedName}' not found`);
    return;
  }

  // Get the first entry in the data array
  const breed = data[0];

  // Print out the description for the user
  console.log(breed.description);
});
