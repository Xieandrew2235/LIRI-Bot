//
require("dotenv").config();
var axios = require("axios");
// Spotify API
// var spotify = new Spotify(keys.spotify);
// OMDB API
axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy")
    .then(
        function (response) {
            console.log("The movie's rating is: ", response);
        }
    );
// Bands In Town API
function searchBandsInTown(artist) {

    // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "?app_id=codingbootcamp";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
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

        // Run function with user-inputted song name; otherwise run default song
        if (cmd === "spotify-this-song") {
            getSpotify(option1);
        }
        else {
            getSpotify("default");

            // else if for OMDB?
        } if (cmd === "movie-this") {
            if (option1) {
                var nodeArgs = process.argv.slice(2).join('');
                movieName = option1;
                getMovie();
                // Display Mr. Nobody if user doesn't input a movie name
            } else {
                movieName = "Mr. Nobody";
                getMovie();
            }
            // If user enters "do-what-it-says", then readFile
        } else if (cmd === "do-what-it-says") {
            readFile();
        } else {
            console.log("Your instructions could not be understood.")
        }
    })
}


// Function to get song from Spotify API
function getSpotify(input) {
    var spotify = new Spotify({
        id: '3c9d59c949b648a88d55122b6430d155',
        secret: '38db73fbb20e43af9c8ab66f14dec74a',
    });
    // Search for song on Spotify based on user input
    if (input) {
        spotify.search({
            type: 'track',
            query: input
        }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            console.log("Artist: " + data.tracks.items[0].album.artists[0].name);
            console.log("Song: " + data.tracks.items[0].name);
            console.log("Preview link of the song from Spotify: " + data.tracks.items[0].preview_url);
            console.log("The album that the song is from: " + data.tracks.items[0].album.name);
        });
    } else {
        // Search for "The Sign" by Ace of Base
    }}
// Function to get movie from OMDB

// Function to call "random.txt"
function readFile() {
    readFile("random.txt", "utf-8", function(error, data){
        if (error) {
            return console.log("error"); 
        }
        // Splits text into an array with commas, then console logging it again
        var dataArr = data.trim().split(",");
        console.log(dataArr);
    });
}
