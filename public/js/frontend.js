document.getElementById('inputForm')
.addEventListener('submit', function(event) {

  let userGuess = document.getElementById('inputField').value;
  console.log(userGuess);
  console.log(JSON.stringify({userGuess: userGuess}));

  fetch(
    '/guess',
    {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      data: JSON.stringify({userGuess: userGuess}),
    }
  )
  .then(function(response) {
    if (response.status != 200) {
      console.log('Error! ' + response.status);
      return
    }
    response.json().then(function(data) {
      console.log(data);
    });
  });

  // Cludgy stuff to stop the form submission from reloading the page.
  event.preventDefault();
  event.stopPropagation();
  return false;
});
