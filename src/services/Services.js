const url = 'http://localhost:8080/';

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

export default {
  searchForPlaylists,
  getPlaylistInformation,
};

// .then((response) => response.json())
// .then((results) => results.results)
// .then((string) => JSON.parse(string))
// .then((json) => json.tracks.items);
