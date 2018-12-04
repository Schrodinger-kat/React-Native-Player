import React, { Component } from 'react';
import Player from './PlayerUI';

export const music = [
  { "title" : "Jazz in Paris",
	  "album" : "Jazz & Blues",
	  "artist" : "Media Right Productions",
	  "genre" : "Jazz & Blues",
	  "source" : "Jazz_In_Paris.mp3",
	  "image" : "album_art.jpg",
	  "trackNumber" : 1,
	  "totalTrackCount" : 6,
	  "duration" : 103,
	  "site" : "https://www.youtube.com/audiolibrary/music"
	},
	{ "title" : "The Messenger",
	  "album" : "Jazz & Blues",
	  "artist" : "Silent Partner",
	  "genre" : "Jazz & Blues",
	  "source" : "The_Messenger.mp3",
	  "image" : "album_art.jpg",
	  "trackNumber" : 2,
	  "totalTrackCount" : 6,
	  "duration" : 132,
	  "site" : "https://www.youtube.com/audiolibrary/music"
	},
	{ "title" : "Talkies",
	  "album" : "Jazz & Blues",
	  "artist" : "Huma-Huma",
	  "genre" : "Jazz & Blues",
	  "source" : "Talkies.mp3",
	  "image" : "album_art.jpg",
	  "trackNumber" : 3,
	  "totalTrackCount" : 6,
	  "duration" : 162,
	  "site" : "https://www.youtube.com/audiolibrary/music"
	},
	{ "title" : "On the Bach",
	  "album" : "Cinematic",
	  "artist" : "Jingle Punks",
	  "genre" : "Cinematic",
	  "source" : "On_the_Bach.mp3",
	  "image" : "album_art.jpg",
	  "trackNumber" : 4,
	  "totalTrackCount" : 6,
	  "duration" : 66,
	  "site" : "https://www.youtube.com/audiolibrary/music"
	},
	{ "title" : "The Story Unfolds",
	  "album" : "Cinematic",
	  "artist" : "Jingle Punks",
	  "genre" : "Cinematic",
	  "source" : "The_Story_Unfolds.mp3",
	  "image" : "album_art.jpg",
	  "trackNumber" : 5,
	  "totalTrackCount" : 6,
	  "duration" : 91,
	  "site" : "https://www.youtube.com/audiolibrary/music"
	},
	{ "title" : "Drop and Roll",
	  "album" : "Youtube Audio Library Rock",
	  "artist" : "Silent Partner",
	  "genre" : "Rock",
	  "source" : "Drop_and_Roll.mp3",
	  "image" : "album_art_2.jpg",
	  "trackNumber" : 1,
	  "totalTrackCount" : 7,
	  "duration" : 121,
	  "site" : "https://www.youtube.com/audiolibrary/music"
	},
	{ "title" : "Motocross",
	  "album" : "Youtube Audio Library Rock",
	  "artist" : "Topher Mohr and Alex Elena",
	  "genre" : "Rock",
	  "source" : "Motocross.mp3",
	  "image" : "album_art_2.jpg",
	  "trackNumber" : 2,
	  "totalTrackCount" : 7,
	  "duration" : 182,
	  "site" : "https://www.youtube.com/audiolibrary/music"
	},
	{ "title" : "Wish You'd Come True",
	  "album" : "Youtube Audio Library Rock",
	  "artist" : "The 126ers",
	  "genre" : "Rock",
	  "source" : "Wish_You_d_Come_True.mp3",
	  "image" : "album_art_2.jpg",
	  "trackNumber" : 3,
	  "totalTrackCount" : 7,
	  "duration" : 169,
	  "site" : "https://www.youtube.com/audiolibrary/music"
	},
	{ "title" : "Awakening",
	  "album" : "Youtube Audio Library Rock",
	  "artist" : "Silent Partner",
	  "genre" : "Rock",
	  "source" : "Awakening.mp3",
	  "image" : "album_art_2.jpg",
	  "trackNumber" : 4,
	  "totalTrackCount" : 7,
	  "duration" : 220,
	  "site" : "https://www.youtube.com/audiolibrary/music"
	},
	{ "title" : "Home",
	  "album" : "Youtube Audio Library Rock",
	  "artist" : "Letter Box",
	  "genre" : "Rock",
	  "source" : "Home.mp3",
	  "image" : "album_art_2.jpg",
	  "trackNumber" : 5,
	  "totalTrackCount" : 7,
	  "duration" : 213,
	  "site" : "https://www.youtube.com/audiolibrary/music"
	},
	{ "title" : "Tell The Angels",
	  "album" : "Youtube Audio Library Rock",
	  "artist" : "Letter Box",
	  "genre" : "Rock",
	  "source" : "Tell_The_Angels.mp3",
	  "image" : "album_art_2.jpg",
	  "trackNumber" : 6,
	  "totalTrackCount" : 7,
	  "duration" : 208,
	  "site" : "https://www.youtube.com/audiolibrary/music"
	},
	{ "title" : "Hey Sailor",
	  "album" : "Youtube Audio Library Rock",
	  "artist" : "Letter Box",
	  "genre" : "Rock",
	  "source" : "Hey_Sailor.mp3",
	  "image" : "album_art_2.jpg",
	  "trackNumber" : 7,
	  "totalTrackCount" : 7,
	  "duration" : 193,
	  "site" : "https://www.youtube.com/audiolibrary/music"
	},
	{ "title" : "Keys To The Kingdom",
	  "album" : "Youtube Audio Library Rock 2",
	  "artist" : "The 126ers",
	  "genre" : "Rock",
	  "source" : "Keys_To_The_Kingdom.mp3",
	  "image" : "album_art_3.jpg",
	  "trackNumber" : 1,
	  "totalTrackCount" : 2,
	  "duration" : 221,
	  "site" : "https://www.youtube.com/audiolibrary/music"
	},
	{ "title" : "The Coldest Shoulder",
	  "album" : "Youtube Audio Library Rock 2",
	  "artist" : "The 126ers",
	  "genre" : "Rock",
	  "source" : "The_Coldest_Shoulder.mp3",
	  "image" : "album_art_3.jpg",
	  "trackNumber" : 2,
	  "totalTrackCount" : 2,
	  "duration" : 160,
	  "site" : "https://www.youtube.com/audiolibrary/music"
	}
];

export default class App extends Component {
  render() {
    return <Player tracks={TRACKS} />
  }
}
