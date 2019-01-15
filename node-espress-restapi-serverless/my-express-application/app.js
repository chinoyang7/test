"use strict";

const http = require("http");
const url = require("url");
const port = 8080;

let user = [
  { userId: 1, firstName: "Mome", lastName: "Linwww" },
  { userId: 2, firstName: "Boo", lastName: "Cheng" },
  { userId: 3, firstName: "Ning", lastName: "Chen" },
  { userId: 4, firstName: "Chin", lastName: "Chia" },
  { userId: 5, firstName: "Joy", lastName: "Oyang" }
];

http
  .createServer(function(request, response) {
    const pathName = url.parse(request.url).pathname;
    const queryData = url.parse(request.url, true).query;

    var url2 = request.url; //this will be /user/5/docs
    var getuser = pathName.split("/")[2]; // this will be 5
    response.writeHead(200, { "Content-Type": "text/html" });
    for (let index = 0; index < user.length; index++) {
      if (getuser == user[index].userId) {
        // response.end("Id is = " + getuser);
        response.end(JSON.stringify(user[index]));
      }
      console.log(getuser + "/" + user[index].userId);
    }

    switch (pathName) {
      case "/":
        response.end("Welcome " + queryData.userId + ", This is my first API"); //queryData.user
        break;
      case "/user":
        response.end(
          JSON.stringify([
            { userId: 1, firstName: "Mome", lastName: "Linwww" },
            { userId: 2, firstName: "Boo", lastName: "Cheng" },
            { userId: 3, firstName: "Ning", lastName: "Chen" },
            { userId: 4, firstName: "Chin", lastName: "Chia" },
            { userId: 5, firstName: "Joy", lastName: "Oyang" }
          ])
        );
        break;
      case "/news":
        response.end(JSON.stringify({ newsId: 1, title: "First news" }));
        break;
      default:
        response.end("Error");
    }
    console.log("A new connection.");
  })
  .listen(port, function() {
    console.log("Web server is started!");
  });
