const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./routes/route");

const connect = require("./database/dbConnection");

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
dotenv.config();

const port = process.env.PORT || 8080;

app.use("/api", router);

app.get("/", (req, res) => {
  try {
    res.json("Get Request....");
  } catch (error) {
    res.json(error);
  }
});

connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`Server connected to http://localhost:${port}`);
      });
    } catch (error) {
      console.log("Cannot connect to the server");
    }
  })
  .catch((error) => {
    console.log("Invalid Database Connection");
  });
