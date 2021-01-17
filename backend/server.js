const dotenv = require("dotenv");

const app = require('./app');

dotenv.config({ path: "./.env" });


const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server has started on port localhost:${PORT}`)
);
