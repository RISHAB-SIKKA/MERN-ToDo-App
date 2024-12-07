const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.port || 5000;
const app = express();
const routes = require("./Routes/ToDoRoute");
app.use(express.json());
app.use(cors())

const intialDbConnection = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      console.log("db connected")
      
    }
    catch (error) {
      console.error(error);
    }
  }

  intialDbConnection();

app.use(routes);

app.listen(PORT, ()=> console.log(`Listening at ${PORT}`));