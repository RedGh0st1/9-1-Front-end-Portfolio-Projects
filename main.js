const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //   console.log(event.target.search.value);
  const lookUp = event.target.search.value;
  //   console.log(lookUp);

  //   const mangaUrl = `https://api.jikan.moe/v4/manga?q=${lookUp}/full`;
  const mangaUrltoo = `https://api.jikan.moe/v4/anime?q=${lookUp}/characters`;

  fetch(`${mangaUrltoo}`)
    .then((res) => res.json())
    //   let animedata = data;
    //   const animedata = data[0].images.jpg.image_url;

    .then((resJson) => {
      const body = document.querySelector(".homebody");
      body.style.backgroundImage = resJson.data[0].images.jpg.image_url;
      console.log(resJson, "Data");
    })

    .catch((error) => console.log(error));

  // fetch(animeUrl)
  //   .then((res) => res.json())
  //   .then((resJson) => console.log(resJson))
  //   .catch((error) => console.log(error));
  form.reset();
});
