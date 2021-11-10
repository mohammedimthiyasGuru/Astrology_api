var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');  
var fileUpload = require('express-fileupload');
var pdf = require('html-pdf');
const puppeteer = require('puppeteer');
const { v4: uuidv4 } = require('uuid');
const moment = require('moment');
var fs = require('fs');
var pug = require ('pug');
var request = require("request");

var responseMiddleware = require('./middlewares/response.middleware');

/*Routing*/

var Activity = require('./routes/Activity.routes');
var consultance = require('./routes/consultance.routes');
var termsandcon = require('./routes/termsandcon.routes');
var code_detail = require('./routes/code_detail.routes');
var footer = require('./routes/footer.routes');
var subscribe = require('./routes/subscribe.routes');
var homam = require('./routes/homam.routes');
var sharedhomam = require('./routes/sharedhomam.routes');
var product = require('./routes/product.routes');
var yantras = require('./routes/yantras.routes');
var templepuja = require('./routes/templepuja.routes');
var rudrasksh = require('./routes/rudrasksh.routes');


var homepage = require('./routes/homepage.routes');




var report_birth = require('./routes/report_birth.routes');
var report_career = require('./routes/report_career.routes');
var report_currenttrans = require('./routes/report_currenttrans.routes');
var report_janam = require('./routes/report_janam.routes');
var report_love = require('./routes/report_love.routes');
var report_marriage = require('./routes/report_marriage.routes');
var report_relationship = require('./routes/report_relationship.routes');
var report_other = require('./routes/report_other.routes');
var report_wealth = require('./routes/report_wealth.routes');




var page_remedies = require('./routes/page_remedies.routes');
var page_gemstones = require('./routes/page_gemstones.routes');
var page_sharehomams = require('./routes/page_sharehomams.routes');
var page_yantra = require('./routes/page_yantra.routes');
var page_templepooja = require('./routes/page_templepooja.routes');
var page_rudraksh = require('./routes/page_rudraksh.routes');
var page_janam = require('./routes/page_janam.routes');
var page_career = require('./routes/page_career.routes');
var page_transit = require('./routes/page_transit.routes');
var page_wealth = require('./routes/page_wealth.routes');
var page_relationship = require('./routes/page_relationship.routes');
var page_birth = require('./routes/page_birth.routes');
var page_lovesex = require('./routes/page_lovesex.routes');
var page_otherrpt = require('./routes/page_otherrpt.routes');
var page_marriage = require('./routes/page_marriage.routes');



var user_details = require('./routes/user_details.routes');





var freeastrology = require('./routes/freeastrology.routes');
var OrderDetails = require('./routes/OrderDetails.routes');









// var rudrasksh = require('./routes/rudrasksh.routes');
// var rudrasksh = require('./routes/rudrasksh.routes');
// var rudrasksh = require('./routes/rudrasksh.routes');





/*Database connectivity*/

var BaseUrl = "http://54.191.47.199:3000/api"; 
const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/Salveo'); 
var db = mongoose.connection; 
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
    console.log("connection succeeded"); 
}) 

var app = express();

app.use(fileUpload());
app.use(responseMiddleware());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('view engine', 'pug');

/*Response settings*/

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
  next();
});




app.post('/upload', function(req, res) {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    res.error(300,'No files were uploaded.');
    return;
  }

  console.log('req.files >>>', req.files); // eslint-disable-line

  sampleFile = req.files.sampleFile;
  var exten = sampleFile.name.split('.');
  console.log(exten[exten.length - 1]);
  var filetype = exten[exten.length - 1];



  uploadPath = __dirname + '/public/uploads/'  + new Date().getTime() + "." + filetype;

  var Finalpath =  BaseUrl +'/uploads/'+ new Date().getTime() + "." + filetype;
   console.log("uploaded path",uploadPath )


  sampleFile.mv(uploadPath, function(err) {
    if (err) {
   console.log(err)
   return res.error(500, "Internal server error");
    }
   res.json({Status:"Success",Message:"file upload success", Data :Finalpath,Code:200});
  });
});







app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api/', express.static(path.join(__dirname, 'public')));
app.use('/api/', express.static(path.join(__dirname, 'routes')));


app.use('/api/activity', Activity);
app.use('/api/consultance', consultance);
app.use('/api/termsandcon', termsandcon);
app.use('/api/code_detail', code_detail);
app.use('/api/footer', footer);
app.use('/api/subscribe', subscribe);
app.use('/api/homam', homam);
app.use('/api/sharedhomam', sharedhomam);
app.use('/api/product', product);
app.use('/api/yantras', yantras);
app.use('/api/templepuja', templepuja);
app.use('/api/rudrasksh', rudrasksh);


app.use('/api/homepage', homepage);
// app.use('/api/rudrasksh', rudrasksh);
// app.use('/api/rudrasksh', rudrasksh);
// app.use('/api/rudrasksh', rudrasksh);



app.use('/api/report_birth', report_birth);
app.use('/api/report_career', report_career);
app.use('/api/report_currenttrans', report_currenttrans);
app.use('/api/report_janam', report_janam);
app.use('/api/report_love', report_love);
app.use('/api/report_marriage', report_marriage);
app.use('/api/report_relationship', report_relationship);
app.use('/api/report_other', report_relationship);
app.use('/api/report_wealth', report_wealth);




app.use('/api/page_remedies', page_remedies);
app.use('/api/page_gemstones', page_gemstones);
app.use('/api/page_sharehomams', page_sharehomams);
app.use('/api/page_yantra', page_yantra);
app.use('/api/page_templepooja', page_templepooja);
app.use('/api/page_rudraksh', page_rudraksh);
app.use('/api/page_janam', page_janam);
app.use('/api/page_career', page_career);
app.use('/api/page_transit', page_transit);
app.use('/api/page_wealth', page_wealth);
app.use('/api/page_relationship', page_relationship);
app.use('/api/page_birth', page_birth);
app.use('/api/page_lovesex', page_lovesex);
app.use('/api/page_otherrpt', page_otherrpt);
app.use('/api/page_marriage', page_marriage);




app.use('/api/user_details', user_details);

app.use('/api/OrderDetails', OrderDetails);

app.use('/api/', freeastrology);











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
  res.render('error');
});

module.exports = app;
