//imports
require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 2545;

//handler function
const app = express();

//routes
app.use((req, res) => {
  res.send("<h1>Welcome To Onkars Server<h1>");
});

//starting my server

app.listen(2545, () => {
  console.log(`server Started On PORT ${PORT}`);
});
