// PACKAGES
const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const session = require('express-session');
const expressValidator = require('express-validator');

// This is stuff to import from our own code
const guessRoutes = require('./routes/guess');
const game = require('./models/game');


// BOILER PLATE
app = express();

// for express
app.use(express.static('public'));

// for handlebars
app.engine('handlebars', handlebars());
app.set('views', './views');
app.set('view engine', 'handlebars');

// for express-validator
app.use(expressValidator());

// for express-session
app.use(
  session({
    //in the future this is not how to store passwords
    secret: 'CHANGE ME',
    resave: false, // doesn't save without changes
    saveUninitialized: true // creates a session
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// PATHWAYS
app.get('/', function(req, res) {
  // Does this user already have a game active?
  // If not, create a new game and save to the session.
  if (!req.session.active) {
    //new is a way to call on a function 'again'
    req.session.active = new game();
    console.log('New game created.  The phrase is: ' + req.session.active.phrase);
  }

  let active = req.session.active;
  // Render home page with the users current game state
  res.render(
    'home',
    {
      game: active,
      maskedPhrase: game.maskedPhrase(active.phrase, active.lettersRight)
    }
  );
});

app.get('/reset', function(req, res) {
  req.session.active = undefined;
  res.redirect('/');
});

// Handle routes to /guess
app.use('/', guessRoutes);


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
