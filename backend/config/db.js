import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",     // your MySQL host
  user: "root",          // your MySQL username
  password: "Johnsmart@2020",          // your MySQL password (leave blank if none)
  database: "investment_site" // the name of the DB you created
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL database");
  }
});

export default db;
