import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).send({ message: "Hello, World!" });
});

app.get("/login", (req, res) => {
  res.send({ message: "Login page" });
});
app.get("/about", (req, res) => {
  res.send({ message: "About page" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
