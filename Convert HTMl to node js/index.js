const express = require("express");

const app = express();
app.set("view engine", "ejs");


app.get("/home", (req, res) => {
    res.render("welcome")
})


app.listen(8080, () => { console.log("server started") })