// testing for the server-side backend
// requirements:
// - different methods should deliver to corresponding endpoints
// - the movie API should get the movies' information (pre-stored)
// - individual components (functions or classes) should work
// - it should retreive the movies by ID
// - external dependencies (ex. tailwind)

const request = require("supertest");
const express = require("express");
const listRoutes = require("../../server/routes/list");
const listController = require("../../server/controllers/listController");
const pool = require("../../server/db");
const { list } = require("postcss");

const app = express();
app.use(express.json());
app.use("/list", listRoutes);

// mocking pool.query
jest.mock("../../server/db");

describe("listController", () => {
  describe("GET /list", () => {
    it("should return status 200 and all watch list movies", async () => {
      const mockRows = [
        { id: 1, title: "movie1" },
        { id: 2, title: "movie2" },
      ];
      listController.getAllWishListedMovies = jest
        .fn()
        .mockResolvedValue(mockRows);

      // Make HTTP GET request to the route
      const response = await request(app).get("/api/wishlist");

      // Assert response
      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockRows);
    });
  });

  describe("getWatchMovieList", () => {
    it("should return all movies in the Watch Movie list", async () => {
      const mockRows = [
        { id: 1, title: "movie1" },
        { id: 2, title: "movie2" },
      ];
      pool.query.mockResolvedValue({ rows: mockRows });

      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();

      await listController.getAllWishListedMovies(req, res, next);

      expect(pool.query).toHaveBeenCalledWith("SELECT * FROM watch_list");
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockRows);
      expect(next).not.toHaveBeenCalledWith();
    });

    it("should call next with error, if query fails", async () => {
      const error = new Error("Database error");
      pool.query.mockRejectedValue(error);

      const req = {};
      const res = {};
      const next = jest.fn();

      await listController.getAllWishListedMovies(req, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });
});
