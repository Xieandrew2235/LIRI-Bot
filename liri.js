//

require("dotenv").config();
// Spotify API
var spotify = new Spotify(keys.spotify);
// OMDB API
// Bands In Town API
// Authenticate from keys.js
var keys = require("keys.js");

// Grab command lines
var cmd = process.argv[2];
var cmd2 = process.argv[3];

// Store arguements in an array
var nodeArgs = process.argv;
// Empty string to hold movie name entry
var movieName = "";
// Run function with song name; otherwise run default song
if (cmd === "spotify-this-song") {
    getSpotify(option1);
}
else {
    getSpotify("default");
}