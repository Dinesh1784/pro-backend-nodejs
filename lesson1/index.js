const express = require("express");
const app = express();
const PORT = 4000 || process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Social App Api",
  });
});

app.get("/api/v1/instagram", (req, res) => {
  const instaSocial = {
    username: "ns_kid_200",
    followers: 66,
    follows: 1200,
    date: Date.now(),
  };
  res.status(200).json({
    instaSocial,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
