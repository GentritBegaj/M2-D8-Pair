function searchAlbumById(id) {
  fetch(`https://deezerdevs-deezer.p.rapidapi.com/artist/${id}`, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "SIGN-UP-FOR-KEY",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((parsedJSON) => console.log(parsedJSON))
    .catch((err) => console.log(err));
}

function onLoad() {
  const params = new URLSearchParams(window.location.search);
  const albumId = params.get("id");
  searchAlbumById(albumId);
}

window.onload = onLoad;
