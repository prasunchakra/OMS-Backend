import express from "express";
import { init } from "./db";
import { Users } from "./models/Users";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Initialize database and start server
init()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Unable to start the server:", error);
  });
