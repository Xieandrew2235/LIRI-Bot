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
// Spotify API
// var spotify = new Spotify(keys.spotify);
// OMDB API
// Empty string to hold user entry for OMDB
var movieName = "";

for (var i = 3; i < input.length; i++) {
    if (i > 3 && i < input.length) {
        name = name + "+" + input[i];
    } else {
        name += input[i];
    }
}


// Make it so liri.js can take in one of the following commands:
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
    }
}
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
