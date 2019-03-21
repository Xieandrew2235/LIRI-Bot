# Assignment: LIRI-Bot
<hr>
<strong>Description: </strong> LIRI is SIRI's long-lost sister, who only functions in the terminals of Macs and Windows for coders, whereas Siri services the billions of iPhone users in the world. LIRI is a command line node app that takes in parameters and returns data.

## Instructions
<hr>

1. Open the LIRI-BOT folder in your terminal, and type in your command line:

    * npm install axios
    * npm install spotify
    * npm install moment
    * npm install node-spotify-api
    * npm install dotenv

![GIF](/install.gif)

2. You can then choose from 4 options

    * To search for a song on Spotify, you would enter: node liri.js spotify-this-song "enter song here". LIRI would then return the user input, artist name, song name, preview link of the song from Spotify, the album that the song is from. If for some reason you do not enter a song name, don't worry, as the default setting has been set to "The Sign" by Ace of Base.

    * To search for the latest concerts by your favorite artists, we make use of the Bands in Town API. In your command line, you would enter: node liri.js concert-this "name of artist", which will return the artist, the name of the venue, venue location, and date of the event in MM/DD/YYYY, courtesy of Moment.JS.

    * To search for movie information, we utilize the OMDB API. In your command line, you would enter: node liri.js movie-this "name of movie", which will return the title, year it was made, IMDB rating, production country, language, a short plot, and actors in the movie.

    * Last but not least (still a work in progress), we have the command line "do-what-it-says". When you enter: node liri.js do-what-it-says , it should run the command given in random.txt.

    ![GIF](/demo.gif)