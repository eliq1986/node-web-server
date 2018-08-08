
const express = require("express");
const server = express();
const fs = require("fs");
const port = process.env.PORT || 3000;

server.set("view engine", "pug");
server.use((req, res, next)=> {
   const now = new Date().toString();
   const log = `${now}: ${req.method} ${req.url}`;
  // console.log(log);
   fs.appendFile("server-log", log + "" + "\n", (err) => {
       if (err) {
         console.log("Unable to append to server.log")
       }
   })
   next();
});

// server.use((req, res, next)=> {
//    res.render("maintanice");
// });

server.get("/", (req, res)=> {
  res.render("home", {
    pageTitle: "Home Page",
    welcomeMessage: "Welcome to my website"

  });

});

server.get("/project", (req, res)=> {
  res.render("project", {
    pageTitle: "Projects",
    welcomeMessage: "Projects Page"

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







server.listen(port, ()=> {
  console.log(`Server is up on port${port}`);
});
