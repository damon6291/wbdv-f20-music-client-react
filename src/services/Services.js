import { url } from '../utils/constant';

export const searchForPlaylists = (query) =>
  fetch(`${url}playlists/${query}`).then((response) => response.json());

export const getPlaylistInformation = (query) =>
  fetch(`${url}playlist/${query}/details`).then((response) => response.json());

export const findProfile = (query) =>
  fetch(`${url}find-user/${query}`).then((response) => response.json());

export const findPlaylistsForUser = (query) =>
  fetch(`${url}${query}/playlists`).then((response) => response.json());

export const findImage = (query) =>
  fetch(`${url}profile/${query}`).then((response) => response.json());

export const registerUser = (json) =>
  fetch(`${url}create-user`, {
    method: 'POST',
    body: JSON.stringify(json),
    headers: {
      'content-type': 'application/json',
    },
  }).then((response) => response.json());

export const handleLogin = (json) =>
  fetch(`${url}login`, {
    method: 'POST',
    body: JSON.stringify(json),
    headers: {
      'content-type': 'application/json',
    },
  }).then((response) => response.json());

export const findUsers = (query) =>
  fetch(`${url}find-users/${query}`).then((response) => response.json());

export const findUserIdBySpotifyId = (id) => {
  fetch(`${url}find-user/spotifyId/${id}`)
    .then((response) => response.json())
    .then((result) => result._id);
};

export default {
  searchForPlaylists,
  getPlaylistInformation,
  findProfile,
  findPlaylistsForUser,
  findImage,
  registerUser,
  handleLogin,
  findUsers,
  findUserIdBySpotifyId,
};

// .then((response) => response.json())
// .then((results) => results.results)
// .then((string) => JSON.parse(string))
// .then((json) => json.tracks.items);
