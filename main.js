const express = require("express");

const server = express();
server.use(express.json());

server.get("/health-check", (req, res) => {
  res.status(200).json({
    message: "Hello world",
  });
});

server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
