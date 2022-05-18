const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");

const PORT = 6161;

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
