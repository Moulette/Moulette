import db from '../../db/pgconnect.js';

const statusController = {
  updateMovieStatus: async (req, res, next) => {
    const { userId, movieId, status } = req.body;
    try {
      const statusRes = await db.query(
        'SELECT status_id FROM status_types WHERE status_name = $1',
        [status]
      );

      const statusId = statusRes.rows[0].status_id;

      await db.query(
        'INSERT INTO user_movies (user_id, movie_id, status_id) VALUES ($1, $2, $3)',
        [userId, movieId, statusId]
      );
      return res.status(200).json({ message: 'Status updated successfully.' });
    } catch (error) {
      console.log('Error updating movie status:', error);
      return next(error);
    }
  },
};

export default statusController;
