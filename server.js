const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDb = require("./config/db.js");

dotenv.config({ path: "./config/config.env" });

connectDb();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1/stores", require("./routes/stores.js"));
app.use(express.static(path.join(__dirname, "public")));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
