function validateInput(input) {

  const sanitizedInput = input.replace(/</g, ‘&lt;’).replace(/>/g, ‘&gt;’);

  if (sanitizedInput === ”) {

throw new Error(‘Input cannot be empty’);

  }

  return sanitizedInput;

}

if (req.headers.referer !== ‘https://www.example.com’) {

  res.status(403).send(‘Forbidden’);



}

const bcrypt = require(‘bcrypt’);

const saltRounds = 10;

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {

});
