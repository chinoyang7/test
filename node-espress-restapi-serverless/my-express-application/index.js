// index.js

const serverless = require("serverless-http");
const express = require("express");
const app = express();

// Routes
app.get("/", function(req, res) {
  res.send("Hello World!");
});

// Listen
const port = process.env.PORT || 3000;
app.listen(port);
console.log("Listening on localhost:" + port);

// // Callback 範例
// function loadImage(callback) {
//   console.log("Loading image");

//   callback();
//   console.log("Loading image222");
// }

// loadImage(function() {
//   console.log("Image is loaded");
// });

// 練習 1
// 將梯形公式設計成一個函式，
// 基本功能必需支援自訂帶進去的數值並且要有直接將結果印出和將結果回傳的函式各一。
// 梯形公式為：(上底＋下底)＊高／2

// function Trapezoid(up, down, height) {
//   TImage = ((up + down) * height) / 2;
//   console.log("Trapezoid's image is " + TImage);
// }
// //Trapezoid(2, 4, 5);

// function Image(up, down, height, func) {
//   func(up, down, height);
// }
// Image(2, 4, 5, Trapezoid);

function step1(func) {
  setTimeout(function() {
    func();
    console.log("Step 1");
  }, 5000);
}

function step2() {
  setTimeout(function() {
    console.log("Step 2");
  }, 2000);
}

//step1();
// step2();
step1(step2);

module.exports.handler = serverless(app);
