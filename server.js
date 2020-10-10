const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

app.use("/", express.static(path.join(__dirname, client/build)))

app.get("/", (req, res) => {
    res.send("Working")
})

app.listen(port, () =>{
    console.log(`listening on port ${port}`);
})