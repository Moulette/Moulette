import db from './pgconnect.js';

async function setupSchema() {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS status_types (
        status_id SERIAL PRIMARY KEY,
        status_name VARCHAR(50) UNIQUE NOT NULL,
        CONSTRAINT status_name_check CHECK (status_name IN ('watch_list', 'watched', 'not_interested'))
      );

      CREATE TABLE IF NOT EXISTS users (
        user_id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
        name VARCHAR(255) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS movies (
        movie_id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        year VARCHAR(4),
        director VARCHAR(255)
      );

      CREATE TABLE IF NOT EXISTS user_movies (
        user_movie_id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(user_id),
        movie_id INTEGER REFERENCES movies(movie_id),
        status_id INTEGER REFERENCES status_types(status_id)
      );
    `);
    console.log('Schema set up successfully!');
  } catch (error) {
    console.error('Failed to set up schema:', error);
  }
}

setupSchema();
