fetch('https://my-json-server.typicode.com/garya08/Files/db')
  .then((response) => response.json())
  .then((json) => console.log(json));
