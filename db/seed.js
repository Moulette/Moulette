import db from './pgconnect.js';

async function seedMovies() {
  const movies = [
    { movie_id: 'tt0092067', title: 'Castle in the Sky' },
    { movie_id: 'tt0096283', title: 'My Neighbor Totoro' },
    { movie_id: 'tt0095327', title: 'Grave of the Fireflies' },
    { movie_id: 'tt1620833', title: "Kiki's Delivery Service" },
    { movie_id: 'tt0102587', title: 'Only Yesterday' },
    { movie_id: 'tt0104652', title: 'Porco Rosso' },
    { movie_id: 'tt0108432', title: 'Ocean Waves' },
    { movie_id: 'tt0110008', title: 'Pom Poko' },
    { movie_id: 'tt0113824', title: 'Whisper of the Heart' },
    { movie_id: 'tt0119698', title: 'Princess Mononoke' },
    { movie_id: 'tt0206013', title: 'My Neighbors the Yamadas' },
    { movie_id: 'tt0245429', title: 'Spirited Away' },
    { movie_id: 'tt0347618', title: 'The Cat Returns' },
    { movie_id: 'tt0347149', title: "Howl's Moving Castle" },
    { movie_id: 'tt0495596', title: 'Tales from Earthsea' },
    { movie_id: 'tt0876563', title: 'Ponyo' },
    { movie_id: 'tt1568921', title: 'Arrietty' },
    { movie_id: 'tt1798188', title: 'From Up on Poppy Hill' },
    { movie_id: 'tt2013293', title: 'The Wind Rises' },
    { movie_id: 'tt2576852', title: 'The Tale of the Princess Kaguya' },
    { movie_id: 'tt3398268', title: 'When Marnie Was There' },
    { movie_id: 'tt3666024', title: 'The Red Turtle' },
    { movie_id: 'tt12441478', title: 'Earwig and the Witch' },
    { movie_id: 'tt6587046', title: 'The Boy and the Heron' },
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

seedMovies();

async function seedStatusTypes() {
  const statuses = [
    { status_name: 'watch_list' },
    { status_name: 'watched' },
    { status_name: 'not_interested' },
  ];

  try {
    for (const status of statuses) {
      await db.query('INSERT INTO status_types (status_name) VALUES ($1)', [
        status.status_name,
      ]);
    }
    console.log('Status types seeded successfully.');
  } catch (error) {
    console.error('Error seeding status types:', error);
  }
}

seedStatusTypes();

export { seedMovies, seedStatusTypes };
