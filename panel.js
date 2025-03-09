const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

let botStatus = "OFF";

app.get("/", (req, res) => {
    res.render("index", { botStatus });
});

app.post("/start-bot", (req, res) => {
    botStatus = "ON";
    res.redirect("/");
});

app.post("/stop-bot", (req, res) => {
    botStatus = "OFF";
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Panel bot berjalan di port ${port}`);
});
