const request = require("request")

function getSimilarMovies(movieSearch, callback) {
    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movieSearch)}&include_adult=false&language=en-US&page=1`;

const options = {
    url,
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWUzMjg4ZWI3ZThiMTE0MTk4NGI1MTY4MmU5YzQwNiIsIm5iZiI6MTczNDYyMDUzNi45NDgsInN1YiI6IjY3NjQzNTc4YTBjYzNkZTY0NzAwMjg4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.24pX4a8CShYy3eWypoesHhrN-CiEMCG-jdrlC9k9Z78'
    },
    json: true,
};

    request (options, (error, response) => {
        if(error) {
            callback("Unable to connect to location services!", undefined);
        } else if (response.statusCode !== 200) {
            callback("Something went wrong!", undefined);
        } else {
            callback(undefined, response);
        }
    });
}

module.exports = getSimilarMovies