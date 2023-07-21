const http = require("http");
const port = 3000;
const fs = require("fs");
const url = require("url");

const sever = http.createServer((req, res) => {
  res.writeHead(200, "Content-Type", "text/html; charset=utf-8");

  const getForm = fs.readFileSync("./views/get-form.html", "utf8");
  const portForm = fs.readFileSync("./views/port-form.html", "utf8");
  res.write(portForm);
  res.end();

  const query = url.parse(req.url, true);
  //   console.log(query.query.username);
  //   console.log(query.query.password);
  console.log(req);
  let data;
  req.on("data", (chuck) => {
    console.log(chuck);
  });
});

sever.listen(port, () => {
  console.log(`app listen on http://localhost:${port}`);
});
