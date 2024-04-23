// server/controllers/authController.js
const pool = require('../db');

const authController = {
  checkCredentials: async (req, res, next) => {
    const { username, password } = req.body;

    try {
      const result = await pool.query(
        'SELECT * FROM users WHERE username = $1 AND password = $2',
        [username, password]
      );
      if (result.rows.length > 0) {
        res.status(200).json({ message: 'Credentials are valid.' });
      } else {
        res.status(401).json({ message: 'Invalid credentials.' });
      }
    } catch (error) {
      console.error(error);
      next(error); // Pass the error to the next middleware (possibly error handling middleware)
    }
  }
};

module.exports = authController;