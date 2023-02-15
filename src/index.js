const express = require("express");
const Database = require("./config/db/database");
const Route = require("./routes/index");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
Database.connect();

app.use(morgan("common"));
app.use(express.json());
app.use(cors({ origin: "*" }));
Route(app);
app.listen(8000, () => {
  console.log("sever is running");
});
