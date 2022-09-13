const form = document.querySelector("form");

form.addEventListener("click", (event) => {
  event.preventDefault();

  const Lookup = event.target.search.value;
  const url = `https://api.jikan.moe/v4/anime?q=deku&sfw`;

  const mangaUrl = `https://api.jikan.moe/v4/manga/{}/full`;

  const animeUrl = `https://api.jikan.moe/v4/anime/{}/full`;

  const animeGenreUrl = `https://api.jikan.moe/v4/genres/anime`;

  const mangaGenreUrl = `https://api.jikan.moe/v4/genres/manga`;
});

fetch(url)
  .then((res) => res.json())
  .then((resJson) => console.log(resJson))
  .catch((error) => console.log(error));

fetch(mangaUrl)
  .then((res) => res.json())
  .then((resJson) => console.log(resJson))
  .catch((error) => console.log(error));
