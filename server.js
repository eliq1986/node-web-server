
const express = require("express");
const server = express();
const fs = require("fs");


server.set("view engine", "pug");
server.use((req, res, next)=> {
   const now = new Date().toString();
   const log = `${now}: ${req.method} ${req.url}`;
   console.log(log);
   fs.appendFile("server-log", log + "" + "\n", (err) => {
       if (err) {
         console.log("Unable to append to server.log")
       }
   })
   next();
});

server.use((req, res, next)=> {
   res.render("maintanice");
});

server.get("/", (req, res)=> {
  res.render("home", {
    pageTitle: "Home Page",
    welcomeMessage: "Welcome to my website"

  });

});

server.get("/about", (req, res)=> {
     res.render("about", {
       pageTitle: "About Page"

     });

});

server.get("/bad", (req, res)=> {
     res.send({
       error: "This is an big ERROR"
     });

});







server.listen(3000, ()=> {
  console.log("Server Running on port 3000");
});
