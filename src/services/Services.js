const url = 'https://wbdv-f20-music-server-spotify.herokuapp.com/api/';
//const url = 'http://localhost:8080/api/';

export const searchForPlaylists = (query) =>
  fetch(`${url}playlists/${query}`)
    .then((response) => response.json())
    .then((results) => results.results)
    .then((string) => JSON.parse(string))
    .then((json) => json.playlists.items);

export const getPlaylistInformation = (query) =>
  fetch(`${url}playlist/${query}/details`)
    .then((response) => response.json())
    .then((result) => result.results)
    .then((string) => JSON.parse(string));

export const findProfile = (query) =>
  fetch(`${url}profile/${query}`)
    .then((response) => response.json())
    .then((result) => result.results)
    .then((string) => JSON.parse(string));

export const findMyProfile = () =>
  fetch(`${url}myprofile`)
    .then((response) => response.json())
    .then((result) => result.results)
    .then((string) => JSON.parse(string));

export const findPlaylistsForUser = (query) =>
  fetch(`${url}profile/${query}/playlists`)
    .then((response) => response.json())
    .then((result) => result.results)
    .then((string) => JSON.parse(string));

export const findFollowersForUser = () =>
  fetch(`${url}myprofile/following`)
    .then((response) => response.json())
    .then((result) => result.results)
    .then((string) => JSON.parse(string));

export const spotifyLogin = () => fetch(`${url}spotifylogin`).then((response) => response.json());

export default {
  searchForPlaylists,
  getPlaylistInformation,
  findProfile,
  findPlaylistsForUser,
  findMyProfile,
  findFollowersForUser,
  spotifyLogin,
};

// .then((response) => response.json())
// .then((results) => results.results)
// .then((string) => JSON.parse(string))
// .then((json) => json.tracks.items);
