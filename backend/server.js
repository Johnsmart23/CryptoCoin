import express from "express";
import cors from "cors";
import db from "./config/db.js";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Backend running successfully 🚀");
});

// ✅ Fetch all users
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Database query failed" });
    } else {
      res.json(results);
    }
  });
});

// ✅ Add a new user (example)
app.post("/users", (req, res) => {
  const { name, email, password } = req.body;
  db.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, password],
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to insert user" });
      } else {
        res.json({ message: "User added successfully", id: results.insertId });
      }
    }
  );
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
