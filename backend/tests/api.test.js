const request = require("supertest");
const app = require("../src/server");
describe("API regression", () => {
  test("GET /api/health -> {ok:true}", async () => {
    const res = await request(app).get("/api/health");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("ok", true);
  });
  test("GET /api/data -> has message & items[]", async () => {
    const res = await request(app).get("/api/data");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message");
    expect(Array.isArray(res.body.items)).toBe(true);
  });
});
