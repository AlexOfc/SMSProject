var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var authenticate = exports.authenticate = function (req, res, next) {
	req.header.session  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJhY2Nlc3MiOiIxIn0.IM_Xgy_WXwVYOh-0vZAOxID9Y5VyYZnd9ssEtX6Uqqg"
	jwt.verify(req.header.session, "qqq", function(err, decoded) {
		console.log(`At M:jwt to check token- err : ${err}, res : ${JSON.stringify(decoded)}`);
		if(err) {
			res.json({
				status_code : 201,
				msg : "Access Denied"
			})
		} else {
			/*check auth is related to user */
			redis.redisClient.hget("auths",req.header.session, function (getautherr, getauthRes) {
				console.log(`At M:authDetails to check userid- err : ${getautherr}, res : ${getauthRes}`);
				if(getauthRes == decoded.id) {
					redis.redisClient.hmget("user:"+decoded.id,"auth","access_level", function (getusererr, getuserRes) {
						console.log(`At M:usersDetails to check user- err : ${getusererr}, res : ${getuserRes}`);
						if(req.header.session && req.header.session == getuserRes[0] && decoded.access == getuserRes[1]) {
							req.body.access_level = getuserRes[1]
							next();
						}
						else {
							res.json({
								status_code : 202,
								msg : "Access Denied"
							})
						}
					});
				}
				else {
					res.json({
						status_code : 203,
						msg : "Access Denied"
					})
				}
			});
			
		}
		
	});
	
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(authenticate);


app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('pages/error');
});

module.exports = app;
