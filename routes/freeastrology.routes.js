var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var ActivityModel = require('./../models/ActivityModel');
var baseUrl = "http://api.vedicrishiastro.com/v1/";
var userID =  "5987";
var apiKey = "99c66ac53b046135333199f39e36585c";
var request = require('request');





router.post('/basic_Astro', function (req, res) {
    console.log(req.body);
    var url = baseUrl + req.body.endpoint;
    var auth = "Basic " + Buffer.from(userID + ":" + apiKey).toString('base64');
    request(
        {
            url: url,
            headers: {
                "Authorization": auth,
                "Accept-language":req.body.language
            },
            method: "POST",
            form: {
        'day': req.body.day,
        'month': req.body.month,
        'year': req.body.year,
        'hour': req.body.hour,
        'min': req.body.min,
        'lat': req.body.lat,
        'lon': req.body.lon,
        'tzone': 5.5
       }
        },
        function(err,totalresult) {
            if(err) {
                console.log(err)
            }else{
            console.log(totalresult.body);
            let c = JSON.parse(totalresult.body);
            res.json({Status:"Success",Message:"State List", Response : c ,Code:200});
              // waterfallCallback(null,totalresult);
              // console.log(totalresult);
            }
        }
        )
});

router.post('/match_birth_details', function (req, res) {
           var url = baseUrl + req.body.endpoint;
    var auth = "Basic " + Buffer.from(userID + ":" + apiKey).toString('base64');
    request(
        {
            url: url,
            headers: {
                "Authorization": auth,
                "Accept-language":req.body.language
            },
            method: "POST",
            form: {
        'm_day': req.body.m_day,
        'm_month': req.body.m_month,
        'm_year': req.body.m_year,
        'm_hour': req.body.m_hour,
        'm_min': req.body.m_min,
        'm_lat': req.body.m_lat,
        'm_lon': req.body.m_lon,
        'm_tzone': 5.5,
        'f_day': req.body.f_day,
        'f_month': req.body.f_month,
        'f_year': req.body.f_year,
        'f_hour': req.body.f_hour,
        'f_min': req.body.f_min,
        'f_lat': req.body.f_lat,
        'f_lon': req.body.f_lon,
        'f_tzone': 5.5,
       }
        },
        function(err, totalresult) {
            if(err) {
                console.log(err)
            }else{
              console.log(totalresult);
               console.log(totalresult.body);
               let c = JSON.parse(totalresult.body);
              res.json({Status:"Success",Message:"State List", Response : c ,Code:200});
            }
        }
        )
});


router.post('/free_astro_pdf', function (req, res) {
    var url = 'https://pdf.astrologyapi.com/v1/basic_horoscope_pdf';
    var auth = "Basic " + Buffer.from(userID + ":" + apiKey).toString('base64');
    request(
        {
            url: url,
            headers: {
                "Authorization": auth,
                "Accept-language":req.body.language
            },
            method: "POST",
            form: {
"name" : "Ajeet Kanojia",
"gender" : "male", 
"day" : 10, 
"month" : 7, 
"year" :1992, 
"hour" : 5, 
"min" : 12, 
"lat" : 19.231, 
"lon" : 72.4242,
"language" : "hi", 
"tzone" : 5.5, 
"place" : "Mumbai,Maharashtra India", 
"chart_style" : "NORTH_INDIAN", 
"footer_link" : "astrologyapi.com", 
"logo_url" : "logo_url", 
"company_name" :"Vedic Rishi Astro Solutions Pvt. Ltd.", 
"company_info" : "Your Company Info", 
"domain_url" : "https://www.astrologyapi.com", 
"company_email" : "mail@astrologyapi.com", 
"company_landline" : "+91- 221232 22", 
"company_mobile" : "+91 1212 1212 12"
       }
        },
        function(err, res, totalresult) {
          console.log("DATASDFAS")
            if(err) {
                console.log(err)
            }else{
              waterfallCallback(null,totalresult);
              console.log(totalresult);
            }
        }
        )
});


router.post('/place_details', function (req, res) {
    var url = baseUrl + "geo_details";
    var auth = "Basic " + Buffer.from(userID + ":" + apiKey).toString('base64');
    request(
        {
            url: url,
            headers: {
                "Authorization": auth
            },
            method: "POST",
            form: {
        'place': req.body.place,
        'maxRows': 6,
       }
        },
        function(err, res, totalresult) {
            if(err) {
                console.log(err)
            }else{
              waterfallCallback(null,totalresult);
              console.log(totalresult);
            }
        }
        )
});




module.exports = router;
