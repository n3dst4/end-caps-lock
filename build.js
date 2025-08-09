var Metalsmith = require("metalsmith");
var pug = require("metalsmith-pug");
var permalinks = require("@metalsmith/permalinks");
var less = require("metalsmith-less");
var serve = require("metalsmith-serve");

Metalsmith(__dirname)
  .metadata({
    title: "My Static Site & Blog",
    description: "It's about saying »Hello« to the World.",
    generator: "Metalsmith",
    url: "http://www.metalsmith.io/",
  })
  .source("./pages")
  .destination("./docs")
  .clean(false)
  .use(less())
  .use(permalinks())
  .use(
    pug({
      locals: {},
    })
  )
  .use(
    serve({
      host: "localhost",
    })
  )
  .build(function (err, files) {
    if (err) {
      throw err;
    }
  });
