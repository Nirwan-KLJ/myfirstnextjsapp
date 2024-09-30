// pages/api/auth.js
import pool from '../../lib/db'; // Import the connection pool
import bcrypt from 'bcrypt'; // Import bcrypt for password hashing

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Log input values for debugging
    console.log('Login attempt with:', { username, password });

    try {
      // Query to check if the user exists with the provided username
      const [rows] = await pool.execute(
        'SELECT * FROM users WHERE username = ?',
        [username]
      );

      // Check if the user exists
      if (rows.length > 0) {
        const user = rows[0];

        // Compare the provided password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
          res.status(200).json({ message: 'Login successful' });
        } else {
          res.status(401).json({ message: 'Invalid username or password' });
        }
      } else {
        res.status(401).json({ message: 'Invalid username or password' });
      }
    } catch (error) {
      console.error('Database query error:', error); // Log the error for debugging
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
