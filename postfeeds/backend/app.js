var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const postsRouter = require('./routes/posts');
const authRouter = require('./routes/auth');
const swaggerUi = require('swagger-ui-express'),
swaggerJsdoc = require("swagger-jsdoc");
const swaggerOptions = {
  definition: {
    openapi:"3.0.0",
    info: {
      title:"PostFeeds API",
      version:"1.0.0",
      description:"A simple express posts API"
    },
    servers:[
      {
      url:"http://localhost:3000"
    }
  ]
  },
  apis:["./routes/*.js"]
};
const specs = swaggerJsdoc(swaggerOptions)

var app = express();

//swagger UI implementation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());
app.use('/posts', postsRouter);
app.use('/api/auth', authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
});

module.exports = app;
