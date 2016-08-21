var Metalsmith  = require('metalsmith');
//var markdown    = require('metalsmith-markdown');
var pug     = require('metalsmith-pug');
var permalinks  = require('metalsmith-permalinks');
var less        = require("metalsmith-less")
var watch = require('metalsmith-watch');
var serve = require('metalsmith-serve');


Metalsmith(__dirname)
  .metadata({
    title: "My Static Site & Blog",
    description: "It's about saying »Hello« to the World.",
    generator: "Metalsmith",
    url: "http://www.metalsmith.io/"
  })
  .source('./pages')
  .destination('./docs')
  .clean(false)
  //.use(markdown())
  .use(less())
  .use(permalinks())
  .use(pug({
    locals: {

    },
  }))
  .use(
    watch({
      paths: {
        "${source}/**/*": "**/*",
        "${source}/../templates/**/*": "**/*",
      },
      livereload: true,
    })
  )
  .use(serve({
    host: "0.0.0.0"
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
