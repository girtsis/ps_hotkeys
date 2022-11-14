const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

let data;

app.get("/api" , (req, res) => {
    return res.send(data);
})

app.post("/api" , (req, res) => {
  const {blocks} = req.body;
  console.log(req.body);
  data = blocks;
  return res.send(blocks);
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});