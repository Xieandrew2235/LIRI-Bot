//
require("dotenv").config();
var axios = require("axios");
// Spotify API
var spotify = new Spotify(keys.spotify);
// OMDB API
axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy")
.then(
  function(response) {
    console.log("The movie's rating is: " , response);
  }
);
// Bands In Town API
function searchBandsInTown(artist) {

    // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "?app_id=codingbootcamp";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(queryURL);
      // Printing the entire object to console
      console.log(response);
      searchBandsInTown(inputArtist);
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

// else if for OMDB?
} if (cmd === "movie-this") {
    if(option1) {
        var nodeArgs = process.argv.slice(2).join('');
        movieName = option1;
        getMovie ();

    } else {
        movieName = "Mr. Nobody";
        getMovie();
    }
} else if (cmd === "do-what-it-says") {
    readFile();
} else {
    console.log("Your instructions could not be understood.")
}})}
