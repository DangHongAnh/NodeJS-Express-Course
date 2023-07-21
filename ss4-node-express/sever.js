const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const fs = require("fs");
app.use(bodyParser.urlencoded({ extended: true }));

// 1.Express là gì?
//  - là một framwork sever được xây dựng dựa trên nền tảng Node.js
//  - express giúp chúng ta dễ dàng sử dụng các hàm có sẵn để viết API dễ dàng hơn
//  - express hoạt động nhanh , câu lệnh ngắn gọn

//  2.khái niệm routing trong express
//    Cấu trúc :
//    app.[GET, POST, PUT, DELETE, PATCH]('/route', ()=>{
//        enter logic code
//    })

const dataUser = {
  users: [
    {
      name: "John",
      address: "Tòa nhà sông đà",
      phone: "0999999999",
    },
    {
      name: "Nam",
      address: "Tokio",
      phone: "0999999998",
    },
    {
      name: "Han",
      address: "Đông Anh",
      phone: "0999999997",
    },
  ],
};

app.get("/send-hello", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});
app.get("/json", (req, res) => {
  // req: là một Object chứa toàn bộ thông tin người dùng gửi về cho sever
  // console.log(req)
  // res: là một object chứa các phương thức mà sever gửi về cho client
  // console.log(res)

  // định nghĩa :
  // - query: domain/key1=value1&key2=value2 ... keyN=valueN
  // - params: domain/is || name ||...
  res.json(dataUser);
});


app.get("/", (req, res) => {
  res.send("<h1>Đây là Home</h1>");
});
app.get("/products", (req, res) => {
  res.send("<h1>Đây là Product page</h1>");
});
app.get("/product-detail", (req, res) => {
  res.send("<h1>Đây là product detail</h1>");
});

app.post("/product", (req, res) => {
  const dataJsonUser = fs.readFileSync("./data.json", "utf8");
  const dataUser = JSON.parse(dataJsonUser);
  const newData = req.body;
  dataUser.users.push(newData);
  fs.writeFileSync("./data.json", JSON.stringify(dataUser));
  res.send({message: "Success"});
  console.log(req.body);
});

// b1: tạo 1 file data.json chứa data users như trên:
// sau khi sử dụng ,method POST => log ra data xem nhận được chưa
// khi đã đọc được data từ req.body => sử dụng lệnh writeFile

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
