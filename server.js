const http = require("http");
const fs = require("fs");
const _ = require("lodash");

// req: comes loaded with url, get or post, res: send the response to the user
const server = http.createServer((req, res) => {
  // lodash

  const num = _.random(0, 20);
  console.log(num);

  const greet = _.once(() => {
    console.log("hello");
  });

  greet();
  greet();

  //   console.log(req.url, req.method);

  // set header content type: inform the browser type of info is being sent
  //   res.setHeader("Content-Type", "text/plain");
  //   res.write("hello, ninjas"); // write the content to send to the browser

  // sending html instead
  res.setHeader("Content-Type", "text/html");
  //   res.write("<head><title>Hello</title></head>");
  //   res.write("<p>hello, ninjas</p>");
  //   res.end();

  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301; // changed this because we are doing a redirect
      res.setHeader("Location", "/about"); // doing this for redirect
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  // send an html file

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //   res.write(data); // if we are sending one thing, we could pass data in res.end()
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
