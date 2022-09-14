const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //   console.log(event.target.search.value);
  const lookUp = event.target.search.value;
  //   console.log(lookUp);

  //   const mangaUrl = `https://api.jikan.moe/v4/manga?q=${lookUp}/full`;
  const mangaUrltoo = `https://api.jikan.moe/v4/anime?q=${lookUp}/characters`;

  //   console.log(mangaUrltoo);
  fetch(`${mangaUrltoo}`)
    .then((res) => res.json())
    //   let animedata = data;
    //   const animedata = data[0].images.jpg.image_url;

    .then((data) => {
      const body = document.querySelector(".homebody");
      body.style.backgroundImage = data[0].images.jpg.image_url;
      console.log(data, "Data");
    })

    .catch((error) => console.log(error));

  // fetch(animeUrl)
  //   .then((res) => res.json())
  //   .then((resJson) => console.log(resJson))
  //   .catch((error) => console.log(error));
  form.reset();
});

//   const characterUrl = `https://api.jikan.moe/v4/anime?q=deku&sfw`;

//   const animeUrl = `https://api.jikan.moe/v4/anime/{}/full`;

//   const animeGenreUrl = `https://api.jikan.moe/v4/genres/anime`;

//   const mangaGenreUrl = `https://api.jikan.moe/v4/genres/manga`;
// });
