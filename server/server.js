const app = require("./src/app");
const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`The server is listening on port http://localhost:${PORT}`)
);
