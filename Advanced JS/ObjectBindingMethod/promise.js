// let fetchData = fetch ();

// fetch (window)
// .then(x => x.text())
// .then(y => myDisplay(y));


    let fetchData = fetch(window);

    console.log(fetchData);

    let apiUrl = "https://jsonplaceholder.typicode.com/users";

    fetch(apiUrl)
    .then(response => response.json())
      .then(json => console.log(json))
 