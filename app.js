const express = require("express");
const cors = require("cors")
const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs")


app.use(cors())

app.get("/", function (req, res) {
    res.send("THIS IS HOME PAGE")
})
app.get("/about", function (req, res) {
    res.render("home")
})

app.listen(3000, function () {
    console.log("server is running port 3000")
})