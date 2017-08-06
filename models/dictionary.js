let dictionary = [
  'gym socks',
  'week old undies',
  'moldy cheese',
  'dust bunnies',
  'unwashed dishes',
  'dump',
  'trash heap',
  'hot garbage',
  'diaper',
  'toddler hands'
]

function getPhrase() {
  return dictionary[Math.floor(Math.random()*dictionary.length)];
}

module.exports.getPhrase = getPhrase;
