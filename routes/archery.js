var router = require('express').Router();

var archeryAthletes = [
  {name: 'Mackenzie Brown', origin: 'Flint, TX'},
  {name: 'Brady Ellison', origin: 'Globe, AZ'},
  {name: 'Zach Garrett', origin: 'Wellington, MO'},
  {name: 'Mackenzie Brown', origin: 'Flint, TX'}
]

router.get('/', function(request, response) {
  console.log('in archery');
  response.send(archeryAthletes);
})


module.exports = router;
