//imports
require("dotenv").config();
const express = require("express");
const sequalize = require("./util/database");
const PORT = process.env.PORT || 2545;

//handler function
const app = express();

//importing models
const User = require("./Model/User");

//routes
app.use((req, res) => {
  res.send("<h1>Welcome To Onkars Server<h1>");
});

//starting my server
sequalize
  .sync({})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server Started On PORT ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
