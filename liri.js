//
require("dotenv").config();
var axios = require("axios");
// Requiring the keys from keys.js
var keys = require("keys.js");
var Spotify = require("node-spotify-api");
var fs = require("fs");
var spotify = new Spotify(keys.spotify);

// Grab command line/user input and stores arguements in an array
var nodeArgs = process.argv;
var cmd2 = process.argv[3];
// var spotify = new Spotify(keys.spotify);

// Empty string to hold user entry for OMDB
var movieName = "";
// Bands in town empty string
var name = "";

for (var i = 3; i < input.length; i++) {
    if (i > 3 && i < input.length) {
        name = name + "+" + input[i];
    } else {
        name += input[i];
    }
}


// Switch statement so that the value of an expression is compared to all cases and when there is a match, the associated block of code will be executed
function userOptions(userChoice, userSearch) {
    switch (userChoice) {
        case "concert-this":
            bandsInTown(name);
            break;

        case "spotify-this-song":
            musicSpotify(name);
            break;

        case "movie-this":
            movieOMDB(name);
            break;

        case "do-what-it-says":
            doWhatItSays();
            break;

        default:
            console.log("Invalid input, try again.");
    }
}
userOptions();

// Bands In Town API
function bandsInTown() {

    // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
    var queryURL = "https://rest.bandsintown.com/artists/" + name + "?app_id=codingbootcamp";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(queryURL);
        // Printing the entire object to console
        request(queryURL, function(error, response, body) {
            // variable to parse data with JSON.parse() 
            var pbody = JSON.parse(body);
            if(!error){
                pbody.forEach(function(element) {
                    console.log("Venue name: " + element.venue.name);
                    console.log("Venue location: " + element.venue.city + "," + element.venue.region + "," + element.venue.country);
                    console.log("Date: " + moment(element.datetime).format("MM/DD/YYYY"));
                });
            }
        });
    
// Function to get song from Spotify API
function callSpotify() {
    // If user input is blank, search for The Sign Ace of Base"
    if (name === "") {
      name = "The Sign Ace of Base";
    }
  
    spotify.search({ type: "track", query: name, limit: "10" }, function(
      error,
      data
    ) {
      if (error) {
        return console.log("Error occurred: " + error);
      }
  
      var song = data.tracks.items[0];
      console.log("Artist(s) - " + song.artists[0].name);
      console.log("Name of song - " + song.name);
      console.log("Preview link on spotify - " + song.preview_url);
      console.log("Album - " + song.album.name);
    });
  
// Function to get movie from OMDB

// Function to call "random.txt"
function readFile() {
    readFile("random.txt", "utf-8", function (error, data) {
        if (error) {
            return console.log("error");
        }
        // Splits text into an array with commas, then console logging it again
        var dataArr = data.trim().split(",");
        console.log(dataArr);
    });
}
