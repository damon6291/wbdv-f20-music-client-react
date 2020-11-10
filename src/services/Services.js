const url = 'https://wbdv-f20-music-server-spotify.herokuapp.com/';

export const searchForPlaylists = (query) =>
  fetch(`${url}searchForPlaylists`, {
    method: 'POST',
    body: JSON.stringify(query),
    headers: {
      'content-type': 'application/json',
    },
    json: true,
  })
    .then((response) => response.json())
    .then((results) => results.results)
    .then((string) => JSON.parse(string))
    .then((json) => json.playlists.items);

// export const searchForSongs = (query) =>
//   fetch('/playlistTracks')

export const getPlaylistInformation = (query) =>
  fetch(`${url}getPlaylistInformation`, {
    method: 'POST',
    body: JSON.stringify(query),
    headers: {
      'content-type': 'application/json',
    },
    json: true,
  })
    .then((response) => response.json())
    .then((result) => result.results)
    .then((string) => JSON.parse(string));

export const findProfile = (query) =>
  fetch(`${url}`, {
    method: 'POST',
    body: JSON.stringify(query),
    headers: {
      'content-type': 'application/json',
    },
    json: true,
  })
    .then((response) => response.json())
    .then((result) => result.results)
    .then((string) => console.log(string));

export default {
  searchForPlaylists,
  getPlaylistInformation,
  findProfile,
};

// .then((response) => response.json())
// .then((results) => results.results)
// .then((string) => JSON.parse(string))
// .then((json) => json.tracks.items);
