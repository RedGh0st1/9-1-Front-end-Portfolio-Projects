const form = document.querySelector("form");
const main = document.querySelector("main");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const lookUp = event.target.search.value;
  if (search.value === "") {
    window.alert("Please enter info");
  }

  const mangaUrltoo = `https://api.jikan.moe/v4/anime?q=${lookUp}/characters`;

  fetch(`${mangaUrltoo}`)
    .then((res) => res.json())
    .then((data) => {
      const animedata = data.data[0];
      document.querySelector(".stats").innerHTML = `
      <h2>Statistics</h2>
      <p><strong style: black;>Score:</strong> ${animedata.score}</p>
      <p><strong>Rank:</strong> ${animedata.rank}</p>
      <p><strong>Popularity:</strong> ${animedata.popularity}</p>
      <p><strong>Status:</strong> ${animedata.status}</p>
      <p><strong>Rating:</strong> ${animedata.rating}</p>`;

      const img = document.querySelector(".animepic");
      img.src = animedata.images.jpg.image_url;

      console.log(img.src);

      document.querySelector(".container").innerHTML = `
      <h2>Description</h2>
      <p><strong>Synopsis:</strong> ${animedata.synopsis}</p>
      <p><strong>Background:</strong> ${animedata.background}</p>`;

      const description = document.querySelector(".container");
      description.style.backgroundColor = "white";
      //   console.log(animedata, "Data");
    })

    .catch((error) => console.log(error));

  // fetch(animeUrl)
  //   .then((res) => res.json())
  //   .then((resJson) => console.log(resJson))
  //   .catch((error) => console.log(error));
  form.reset();
});
