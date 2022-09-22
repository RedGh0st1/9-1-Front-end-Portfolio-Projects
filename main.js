const form = document.querySelector("form");
const main = document.querySelector("main");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const lookUp = event.target.search.value;
  if (search.value === "") {
    window.alert("Please enter info");
  }

  const mangaUrltoo = `https://api.jikan.moe/v4/anime?q=${lookUp}/full`;

  fetch(`${mangaUrltoo}`)
    .then((res) => res.json())
    .then((data) => {
      const animedata = data.data[0];
      console.log(animedata);
      document.querySelector(".stats").innerHTML = `
      <h2>Statistics</h2>
      <p><strong>Score:</strong> ${animedata.score}</p>
      <p><strong>Rank:</strong> ${animedata.rank}</p>
      <p><strong>Popularity:</strong> ${animedata.popularity}</p>
      <p><strong>Status:</strong> ${animedata.status}</p>
      <p><strong>Rating:</strong> ${animedata.rating}</p>`;

      const img = document.querySelector(".animepic");
      img.src = animedata.images.jpg.image_url;

      document.querySelector(".container").innerHTML = `
      <h2>Description</h2>
      <p><strong>Synopsis:</strong> ${animedata.synopsis}</p>
      <p><strong>Background:</strong> ${animedata.background}</p>`;

      const description = document.querySelector(".container");
      description.style.backgroundColor = "white";
      //   console.log(animedata, "Data");
      const body = document.querySelector(".homebody");
      body.style.backgroundColor = `black`;
    })

    .catch((error) => console.log(error));

  form.reset();
});

const topAnime = "https://api.jikan.moe/v4/top/anime?limit=5&offset=0";
fetch(`${topAnime}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.data);
    const topFive = data.data;
    topFive.map((element) => {
      //   console.log(element.rank);
      const title = element.title;
      const rank = element.rank;
      const image = element.images.jpg.image_url;
      const anime = `<li><h2>${title}</h2><img src="${image}"><p>rank:${rank}</p></li>`;
      document.querySelector(".Topfive").innerHTML += anime;
    });
  })
  .catch((error) => {
    console.log(error);
  });
