const express = require("express");
const app = express();
const port = 3001;
const fs = require("fs");


// app.get("/", (req, res) => {
//   res.send("Home page");
// });
// app.get("/overview", (req, res) => {
//   res.send("overview page");
// });

// app.get("/product", (req, res) => {
//   res.send("product page");
// });

// bài 3
//3.1
// app.get("/api/v1/user", (req, res) => {
//     // b1: đọc file user.json
//     // fs.readFile('./data/user.json', (err, data) => {
//     //     if (err) return err
//     //     res.send(JSON.parse(data))
//     // })
//   res.send("PAGE NOT FOUND");
// });
app.get("/api/v1/users", (req, res) => {
  const users = JSON.parse(fs.readFileSync("./data/user.json", "utf8"));
  console.log(users);
  res.status(200).json("No page found");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
//3.2
app.get("/api/v1/users/id", (req, res) => {
  const users = JSON.parse(fs.readFileSync("./data/user.json", "utf8"));
  console.log(users);
  res.status(200).json("No page found");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});