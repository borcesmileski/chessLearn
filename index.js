let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let methodOverride = require("method-override");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/karta", (req, res) => {
    res.render("karta.ejs");
});

app.get("/home", (req, res) => {
    res.render("home.ejs");
});
app.get("/learn_chess", (req, res) => {
    res.render("learnChess.ejs");
});

app.get("/play_chess", (req, res) => {
    res.render("playChess.ejs");
});
app.get("/aboutUs", (req, res) => {
    res.render("aboutUs.ejs");
});
app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});
app.get("/login", (req, res) => {
    res.render("login.ejs");
});
app.get("/sign-up", (req, res) => {
    res.render("sign-up.ejs");
});
app.listen(process.env.PORT || 3000, () => {
    console.log("app started");
});


app.get("*", (req, res) => {
    res.redirect("/");
});