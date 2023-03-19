const express = require("express");

// express app
const app = express();

//register view engine

// app.set("view engine", "ejs");
// app.set('views', 'myviews'); // say you want to change the views folder to myviews.

// listen for request
app.listen(3000); //you could store it in a variable when you want to use it later in sockets

app.get("/", (req, res) => {
  //   res.send("<p>home page</p>");
  res.sendFile("./views/index.html", { root: __dirname }); // dirname represent the absolute path of the project folder
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

// redirects

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// 404 page

// app.use must go down at the bottom because it just goes through the entire routes. This is like default in switch

app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
