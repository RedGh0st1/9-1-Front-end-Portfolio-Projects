const url = `https://api.jikan.moe/v4/anime?q=deku&sfw`;

fetch(url)
  .then((res) => res.json())
  .then((resJson) => console.log(resJson))
  .catch((error) => console.log(error));
