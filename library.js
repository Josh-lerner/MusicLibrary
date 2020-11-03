const library = {
  tracks: {
         t01: {
                id: "t01",
                name: "Code Monkey",
                artist: "Jonathan Coulton",
                album: "Thing a Week Three"
         },
         t02: {
                id: "t02",
                name: "Model View Controller",
                artist: "James Dempsey",
                album: "WWDC 2003"
         },
         t03: {
                id: "t03",
                name: "Four Thirty-Three",
                artist: "John Cage",
                album: "Woodstock 1952"
         }
  },
  playlists: {
         p01: {
                id: "p01",
                name: "Coding Music",
                tracks: ["t01", "t02"]
         },
         p02: {
                id: "p02",
                name: "Other Playlist",
                tracks: ["t03"]
         }
        },
  printPlaylists: function () {
    for (let key in this.playlists)
           console.log((`${this.playlists[key].id}: ${this.playlists[key].name} - ${this.playlists[key].tracks.length} tracks`))
  } ,
  printTracks: function () {
    for (let key in this.tracks) {
           console.log(`${this.tracks[key].id}: ${this.tracks[key].name} by ${this.tracks[key].artist} (${this.tracks[key].album})`
           )
    }
  },
  printPlaylist: function (playlistId) {
    const playlist = this.playlists[playlistId];
    console.log(`${playlistId}: ${playlist.name}  - ${playlist.tracks.length} tracks`);
    const trackIds = playlist.tracks;
    const allTracks = this.tracks;
    trackIds.forEach(trackId => {
           const track = allTracks[trackId];
           console.log(`${trackId}: ${track.name} by ${track.artist} (${track.album})`)
    });
  },
  addTrackToPlaylist: function (trackId, playlistId) {
    const playlistTracks = this.playlists[playlistId].tracks;
    const trackToMove = this.tracks[trackId]
    playlistTracks.push(trackId);
    console.log(playlistTracks);
},
generateUid: function () {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
},
addTrack:  function (name, artist, album) {
  library.tracks = { t04: { id: "t04", name, artist, album } }
  return this.tracks
},
addPlaylist: function (name) {
  library.playList = { p03: { id: "p03", name: name, tracks: ["t01", "t04"] } }
  return this.playList
}
}
// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
// const printPlaylists = function () {
library.printPlaylists();

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
library.printTracks()

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
library.printPlaylist("p01")

library.addTrackToPlaylist ("t03", "p01")
// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function () {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};

console.log(library.addTrack("Power", "Kanye West", "My Beautiful Dark Twisted Fantasy"))

console.log(library.addPlaylist("My New Playlist"))

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function (query) {

}
