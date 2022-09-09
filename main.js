const url = ` `;

fetch(url)
  .then((res) => res.json())
  .then((resJson) => console.log(resJson))
  .catch((error) => console.log(error));
