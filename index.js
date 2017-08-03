// PACKAGES
const express = require('express');
const bodyParser = require('body-parser');
const guessRoutes = require('./routes/guess');

// BOILER PLATE
app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// PATHWAYS
app.get('/', function(req, res) {
  res.render('home');
});

// Handle routes to /guess
app.use('/guess', guessRoutes);


// This is what the client (browser) will do
// let user_selection = something_from_dom;
// fetch('/guess', {
//    headers: {
//      'Accept': 'application/json',
//      'Content-Type': 'application/json'
//    },
//    method: "POST",
//    body: JSON.stringify({guess: user_selection})
// });

//LISTEN

app.listen(3000, function() {
  console.log('Application started.  Listening on port 3000');
});
