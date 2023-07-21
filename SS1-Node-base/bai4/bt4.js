// const http = require("http");
// const url = require("url");

// const server = http.createServer((req, res) => {
//   const { query, pathname } = url.parse(req.url, true);
//   res.writeHead(200, { "content-type": "text/html" });
//   if (pathname === "/" || pathname === "/home") {
//     res.write(`Home page`);
//   } else if (pathname === "/overview") {
//     // res.write(`Overview page`);
//     res.write("../overview.html");
//   } else {
//     res.write(`Not Found`);
//   }
//   res.end();
// });

// server.listen(8000, () => {
//   console.log("Server is running on port 8000");
// });

const http = require("http");
const port = 3000;
const fs = require("fs");
// b1- khởi tạo server
// b2- tạo foder txt có file final.txt
// b3- require fs vào và sử dụng hàm fs.readFileSync

const server = http.createServer((req, res) => {
  const readFinal =  fs.readFileSync("./txt/final.txt","utf8");
  // b4 : in ra màn hình client
  res.writeHead(200, { "Content-Type": "text/html; charset=utf8" });
  res.write(readFinal);
  res.end();
})


server.listen(port, () => {
    console.log(`listening on port : http://localhost:${port}`);
});