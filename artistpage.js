const getArtistInfo = (id) => {
  fetch(
    `https://heroku-cors-api.herokuapp.com/https://deezerdevs-deezer.p.rapidapi.com/artist/${id}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "8d688f8c82msh41ea802837a983cp13b7c5jsn80cbb4fc29f7",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let jumbotron = document.querySelector(".jumbotron");
      jumbotron.style.backgroundImage = `url("${data.picture_xl}")`;
      jumbotron.style.backgroundSize = "cover";
      let artist = document.querySelector("#artist-name");
      let albumsRow = document.querySelector(".albums-row");
      artist.innerHTML = data.name;
    });
};

const getArtistId = () => {
  const params = new URLSearchParams(window.location.search);
  const artistId = params.get("artistId");
  getArtistInfo(artistId);
};

window.onload = getArtistId;
