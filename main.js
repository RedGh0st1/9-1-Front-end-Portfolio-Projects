const form = document.querySelector("form");
const main = document.querySelector("main");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  //   console.log(event.target.search.value);
  const lookUp = event.target.search.value;
  //   console.log(lookUp);

  //   const mangaUrl = `https://api.jikan.moe/v4/manga?q=${lookUp}/full`;
  const mangaUrltoo = `https://api.jikan.moe/v4/anime?q=${lookUp}/characters`;

  fetch(`${mangaUrltoo}`)
    .then((res) => res.json())
    .then((data) => {
      const animedata = data.data[0];
      //   const body = document.querySelector(".homebody");

      //   console.log(animedata.images.jpg.image_url);
      //   const img = animedata.images.jpg.image_url;
      //   console.log(animeInfo, " URL");
      document.querySelector(".stats").innerHTML = `
      <h2>Statistics</h2>
      <p><strong style: black;>Score:</strong> ${animedata.score}</p>
      <p><strong>Rank:</strong> ${animedata.rank}</p>
      <p><strong>Popularity:</strong> ${animedata.popularity}</p>
      <p><strong>Status:</strong> ${animedata.status}</p>
      <p><strong>Rating:</strong> ${animedata.rating}</p>`;

      const img = document.createElement("img");

      document.querySelector(".container").innerHTML = `
      <h2>Description</h2>
      <p><strong>Synopsis:</strong> ${animedata.synopsis}</p>
      <p><strong>Background:</strong> ${animedata.background}</p>`;
      console.log(animedata, "Data");
    })

    .catch((error) => console.log(error));

  // fetch(animeUrl)
  //   .then((res) => res.json())
  //   .then((resJson) => console.log(resJson))
  //   .catch((error) => console.log(error));
  form.reset();
});
