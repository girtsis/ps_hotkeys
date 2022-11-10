const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

app.get("/api" , (req, res) => {
    return res.send({message: "yo"});
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});