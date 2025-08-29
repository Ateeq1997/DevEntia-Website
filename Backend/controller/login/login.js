const jwt = require('jsonwebtoken');
const User = require('../../Model/userModel');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Admin hardcoded login
    if (email === 'admin@gmail.com' && password === 'adminabc') {
      const token = jwt.sign({ email, role: 'admin' }, 'your_jwt_secret_key', {
        expiresIn: '1h',
      });
      return res.json({ message: 'Admin Login Successful', token, user: { email, role: 'admin' } });
    }

    // Lookup user in DB
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // NOTE: Passwords are stored in plaintext in current schema.
    // If you later hash passwords, replace the comparison with bcrypt.compare.
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ email, role: 'user' }, 'your_jwt_secret_key', {
      expiresIn: '1h',
    });

    return res.json({ message: 'User Login Successful', token, user: { email: user.email, role: 'user' } });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = login;
