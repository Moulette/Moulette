import db from './pgconnect';

async function seedMovies() {
  const movies = [
    { movie_id: 'tt0092067', title: 'Castle in the Sky' },
    { movie_id: 'tt0096283', title: 'My Neighbor Totoro' },
    { movie_id: 'tt0095327', title: 'Grave of the Fireflies' },
    { movie_id: 'tt1620833', title: "Kiki's Delivery Service" },
    { movie_id: 'tt0102587', title: 'Only Yesterday' },
  ];

  try {
    for (const movie of movies) {
      await db.query(
        'INSERT INTO movies (movie_id, title) VALUES ($1, $2) ON CONFLICT (movie_id) DO NOTHING;',
        [movie.movie_id, movie.title]
      );
    }
    console.log('Movies seeded successfully.');
  } catch (error) {
    console.error('Error seeding movies:', error);
  }
}

export default seedMovies;
