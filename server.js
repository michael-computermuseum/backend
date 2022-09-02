import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from API!');
});

app.get("/animals", (req, res) => {
  res.json([
    { _id: "a1", name: "Crazy Chameleon" },
    { _id: "a2", name: "Lazy Lion" },
  ])
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log("Server started up: http://localhost:" + PORT)
})
