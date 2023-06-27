const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
  const { email, password, isAdmin } = req.body;

  console.log(req.body)
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    email,
    password: hashedPassword,
    isAdmin,
  });

  await user.save();

  res.status(201).send({ message: 'User registered successfully' });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).send({ message: 'User not found' });
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(401).send({ message: 'Incorrect password' });
  }

  const token = jwt.sign(
    { id: user._id, email: user.email, isAdmin: user.isAdmin },
    'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY4Nzg4MzgzNiwiaWF0IjoxNjg3ODgzODM2fQ.dH0qXhRs8672BE5LCRhDHcHJ-pvetIZW_u3agfHRk_M',
    { expiresIn: '1h' }
  );

  res.status(200).send({ token, user });
};
