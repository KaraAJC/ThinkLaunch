
// Step One: let’s fetch an endpoint, which creates a promise
    fetch('https://api.github.com/users/catrina')

// fetch gives a blob, from which we pull the JSON data
      .then(data => data.json())
      .then(data => {
          console.log(data);

// We can use .map, filter, or a for loop to do something with the data
    // for (let i=0; i<data.public_repos; i++) {
        // alert(`I count ${i+1} Repos!`);
// }
      });