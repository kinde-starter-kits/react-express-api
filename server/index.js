require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
