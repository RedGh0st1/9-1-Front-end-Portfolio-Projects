const form = document.querySelector("form");

form.addEventListener("click", (event) => {
  event.preventDefault();

  const Lookup = event.target.search.value;

  //   const characterUrl = `https://api.jikan.moe/v4/anime?q=deku&sfw`;

  const mangaUrl = `https://api.jikan.moe/v4/manga/${Lookup}/full`;

  //   const animeUrl = `https://api.jikan.moe/v4/anime/{}/full`;

  //   const animeGenreUrl = `https://api.jikan.moe/v4/genres/anime`;

  //   const mangaGenreUrl = `https://api.jikan.moe/v4/genres/manga`;
  // });

  fetch(`${mangaUrl}`)
    .then((res) => res.json())
    .then((resJson) => console.log(resJson))
    .catch((error) => console.log(error));

  // fetch(animeUrl)
  //   .then((res) => res.json())
  //   .then((resJson) => console.log(resJson))
  //   .catch((error) => console.log(error));
});
