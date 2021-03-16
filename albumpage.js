const searchAlbumById = async (id) => {
  try {
    fetch(
      `https://heroku-cors-api.herokuapp.com/https://deezerdevs-deezer.p.rapidapi.com/album/${id}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "8d688f8c82msh41ea802837a983cp13b7c5jsn80cbb4fc29f7",
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let tbody = document.querySelector("tbody");
        let artist = document.querySelector(".artist-name");
        let numberOfTracks = document.querySelector(".number-of-tracks");
        let releaseYear = document.querySelector(".release-year");
        let albumCover = document.querySelector(".album-cover");
        let albumTitle = document.querySelector(".album-title");

        artist.innerHTML = data.artist.name;
        numberOfTracks.innerHTML = data.tracks.data.length;
        releaseYear.innerHTML = data.release_date;
        albumTitle.textContent = data.title;
        albumCover.src = data.cover_medium;
        tbody.innerHTML = "";
        data.tracks.data.forEach((item) => {
          tbody.innerHTML += `<tr class="tacklist-item">
            <th scope="row" class="d-flex">
              <div><i class="fas fa-music"></i></div>
              <div class="ml-2"><i class="fas fa-play"><audio src="${
                item.preview
              }"></audio></i></div>
              <div class="ml-2 d-none"><i class="fas fa-pause"></i></div>
              
            </th>
            
            <td>
              <div class="d-inline-block">
                <span class="track-title">${item.title}</span>
                <br />
                <small class="artist-name">${item.artist.name}</small>
              </div>
            </td>
            <td class="text-right">${formatTime(item.duration)}</td>
          </tr>`;
        });
      });
  } catch {
    console.error();
  }
};

function onLoad() {
  const params = new URLSearchParams(window.location.search);
  const albumId = params.get("id");
  searchAlbumById(albumId);
  console.log(albumId);
}

function formatTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds - min * 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  return `${min}:${sec}`;
}

window.onload = onLoad;
