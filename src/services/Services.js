//const url = 'https://wbdv-f20-music-server-spotify.herokuapp.com/api';
const url = 'http://localhost:8080/api/';

export const searchForPlaylists = (query) =>
  fetch(`${url}playlists/${query}`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((results) => results.results)
    .then((string) => JSON.parse(string))
    .then((json) => json.playlists.items);

export const getPlaylistInformation = (query) =>
  fetch(`${url}playlist/${query}/details`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((result) => result.results)
    .then((string) => JSON.parse(string));

export const findProfile = (query) =>
  fetch(`${url}profile/${query}`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((result) => result.results)
    .then((string) => JSON.parse(string));

export const findMyProfile = () =>
  fetch(`${url}myprofile`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((result) => result.results)
    .then((string) => JSON.parse(string));

export const findPlaylistsForUser = (query) =>
  fetch(`${url}profile/${query}/playlists`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((result) => result.results)
    .then((string) => JSON.parse(string));

export const findFollowersForUser = () =>
  fetch(`${url}myprofile/following`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((result) => result.results)
    .then((string) => JSON.parse(string));

export default {
  searchForPlaylists,
  getPlaylistInformation,
  findProfile,
  findPlaylistsForUser,
  findMyProfile,
  findFollowersForUser,
};

// .then((response) => response.json())
// .then((results) => results.results)
// .then((string) => JSON.parse(string))
// .then((json) => json.tracks.items);
