document.getElementById('inputForm')
.addEventListener('submit', function(event) {

  let userGuess = document.getElementById('inputField').value;
  console.log(userGuess);

  fetch(
    '/guess',
    {
      method: 'POST',
      data: JSON.stringify({userGuess: userGuess})
    }
  )
  .then(function(response) {
    console.log(response);
  });
  // Cludgy stuff to stop the form submission from reloading the page.
  event.preventDefault();
  event.stopPropagation();
  return false;
});
