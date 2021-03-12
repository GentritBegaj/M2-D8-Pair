window.onload = () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/412/albums")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let tbody = document.querySelector("tbody");
      tbody.innerHTML = "";
      data.data.forEach((item) => {
        tbody.innerHTML += `<tr class="tacklist-item">
            <th scope="row">
              <i class="fas fa-music"></i>
            </th>
            <td>
              <div class="d-inline-block">
                <span class="track-title">${item.title}</span>
                <br />
                <small class="artist-name">${item.title}</small>
              </div>
            </td>
          </tr>`;
      });
    });
};
