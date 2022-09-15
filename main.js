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
      const img = animedata.images.jpg.image_url;

      document.body.style.backgroundImage = url(`${img}`);

      const animeInfo = animedata.url;

      //   console.log(animeInfo, " URL");
      //   console.log(animedata, "Data");
    })

    .catch((error) => console.log(error));

  // fetch(animeUrl)
  //   .then((res) => res.json())
  //   .then((resJson) => console.log(resJson))
  //   .catch((error) => console.log(error));
  form.reset();
});
