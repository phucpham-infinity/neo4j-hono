import { Hono } from "hono";
// import neo4j from "neo4j-driver";

// const DB_CONFIG = {
//   uri: URI,
//   user: USER,
//   password: PASSWORD,
// };

// console.log("🚀 ~ DB_CONFIG", DB_CONFIG);

// const driver = neo4j.driver(
//   DB_CONFIG.uri,
//   neo4j.auth.basic(DB_CONFIG.user, DB_CONFIG.password)
// );
// const session = driver.session();

const app = new Hono();
app.get("/", (c) => c.text("Hono!!"));

export default app;
