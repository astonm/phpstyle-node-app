var express = require("express");
var session = require("express-session");

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    saveUninitialized: false,
    secret: "some global secret string",
    resave: true
  })
);

app.all("/*", function(req, res) {
  var path = req.path;
  if (path == "/") {
    path = "/index.js";
  }

  var globals = getGlobals(req, res);

  try {
    globals.include(path);
    res.end();
  } catch (e) {
    if (e.toString().indexOf("Cannot find module") >= 0) {
      res.sendStatus(404);
    } else {
      throw e;
    }
  }
});

function getGlobals(req, res) {
  var globals = {
    include: function(path) {
      if (path.charAt(0) != "/") {
        path = "/" + path;
      }

      var module = require("." + path); // leading dot for local path resolution
      return module(globals);
    },
    redirect: res.redirect.bind(res),
    request: req.body,
    session: req.session,
    write: res.write.bind(res)
  };
  return globals;
}

app.listen(process.env.PORT || 5000);
