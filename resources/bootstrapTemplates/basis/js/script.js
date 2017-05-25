// STEP ZERO! Make sure you have the URL setup the way you need it to be
  let myUrl = 'https://api.github.com/users/catrina'

// STEP ONE! let’s fetch an endpoint, which creates a promise
  fetch(myUrl)

// STEP TWO! fetch gives a blob, from which we pull the JSON data, lets make sure it's formatted to JSON
      .then(data => data.json())

// STEP THREE! Let's look at the Data we've gotten from the API
      .then(data => {
          console.log(data);

// STEP FOUR! DO SOME THINGS TO THE DATA!
          // loop around the data...?
          // make stuff out of the data??
      }
  );