// testing for the server-side backend
// requirements:
// - different methods should deliver to corresponding endpoints
// - the movie API should get the movies' information (pre-stored)
// - individual components (functions or classes) should work
// - it should retreive the movies by ID
// - external dependencies (ex. tailwind)

const request = require("supertest");
const app = require("../app");

describe("GET /users", () => {
  test("should return all users", async () => {
    const response = await request(app).get("/users");
    expect(response.status).toBe(200);
  });
});
npm 