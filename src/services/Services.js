import { url } from '../utils/constant';

export const searchForPlaylists = (query) =>
  fetch(`${url}playlists/${query}`, {
    credentials: 'include',
  }).then((response) => response.json());

export const getPlaylistInformation = (query) =>
  fetch(`${url}playlist/${query}/details`, {
    credentials: 'include',
  }).then((response) => response.json());

export const findProfile = (query) =>
  fetch(`${url}find-user/${query}`, {
    credentials: 'include',
  }).then((response) => response.json());

export const findPlaylistsForUser = (query) =>
  fetch(`${url}${query}/playlists`, {
    credentials: 'include',
  }).then((response) => response.json());

export const findImage = (query) =>
  fetch(`${url}profile/${query}`, {
    credentials: 'include',
  }).then((response) => response.json());

export const registerUser = (json) =>
  fetch(`${url}create-user`, {
    method: 'POST',
    body: JSON.stringify(json),
    headers: {
      'content-type': 'application/json',
    },
    credentials: 'include',
  }).then((response) => response.json());

export const handleLogin = (json) =>
  fetch(`${url}login`, {
    method: 'POST',
    body: JSON.stringify(json),
    headers: {
      'content-type': 'application/json',
    },
    credentials: 'include',
  }).then((response) => response.json());

export const findUsers = (query) =>
  fetch(`${url}find-users/${query}`, { credentials: 'include' }).then((response) =>
    response.json()
  );

export const followUser = (from, to) =>
  fetch(`${url}follow/${from}/${to}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    credentials: 'include',
  }).then((response) => response.json());

export const removeFollower = (from, to) =>
  fetch(`${url}follow-remove/${from}/${to}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    credentials: 'include',
  }).then((response) => response.json());

export const createPost = (json) =>
  fetch(`${url}create-post`, {
    method: 'POST',
    body: JSON.stringify(json),
    headers: {
      'content-type': 'application/json',
    },
    credentials: 'include',
  }).then((response) => response.json());

export const findAllPosts = () =>
  fetch(`${url}posts`, { credentials: 'include' }).then((response) => response.json());

export const removePost = (id) =>
  fetch(`${url}remove-post/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  }).then((response) => response.json());

export const findCurrent = () =>
  fetch(`${url}find-currentuser`, {
    credentials: 'include',
  }).then((response) => response.json());

export const logOut = () =>
  fetch(`${url}logout`, {
    credentials: 'include',
  }).then((response) => response.json());

export default {
  searchForPlaylists,
  getPlaylistInformation,
  findProfile,
  findPlaylistsForUser,
  findImage,
  registerUser,
  handleLogin,
  findUsers,
  followUser,
  removeFollower,
  createPost,
  findAllPosts,
  removePost,
  findCurrent,
  logOut,
};

// .then((response) => response.json())
// .then((results) => results.results)
// .then((string) => JSON.parse(string))
// .then((json) => json.tracks.items);
