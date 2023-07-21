const http = require("http");
const url = require("url");
const port = 8000;
var server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  res.writeHead(200, { "content-type": "text/html" });
  if (pathname === "/" || pathname === "/home") {
    res.write("<h1> Wellcome to home page </h1>");
    res.end();
  } else if (pathname === "/product") {
    res.write("<h1> Wellcome to product page </h1>");
    res.end();
  } else if (pathname === "/contact") {
    res.write("<h1> Wellcome to contact page </h1>");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1> 404 page not found </h1>");
    res.end();
  }
});

server.listen(port, "127.0.0.1", function () {
  console.log("listening on");
});
