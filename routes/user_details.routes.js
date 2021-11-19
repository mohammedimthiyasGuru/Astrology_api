var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var user_detailsModel = require('./../models/user_detailsModel');


router.post('/create', async function(req, res) {
  try{

        await user_detailsModel.create({
  dob : req.body.dob,
  email_id : req.body.email_id,
  gender : req.body.gender,
  gothram : req.body.gothram,
  lat : req.body.lat,
  long : req.body.long,
  nakshatra : req.body.nakshatra,
  password : req.body.password,
  phone_numeber :req.body.phone_numeber,
  placeofbirth : req.body.placeofbirth,
  rashi : req.body.rashi,
  time : req.body.time,
  user_name : req.body.user_name,
  members : [],
        }, 
        function (err, user) {
          console.log(user)
        res.json({Status:"Success",Message:"Added successfully", Data : user ,Code:200}); 
        });
}
catch(e){
      res.json({Status:"Failed",Message:"Internal Server Error", Data : {},Code:500});
}
});


router.get('/deletes', function (req, res) {
      user_detailsModel.remove({}, function (err, user) {
          if (err) return res.status(500).send("There was a problem deleting the user.");
             res.json({Status:"Success",Message:"user_detailsModel Deleted", Data : {} ,Code:200});     
      });
});


router.post('/getlist_id', function (req, res) {
        user_detailsModel.find({Person_id:req.body.Person_id}, function (err, StateList) {
          res.json({Status:"Success",Message:"user_detailsModel List", Data : StateList ,Code:200});
        });
});



router.post('/loginuser', function (req, res) {
        user_detailsModel.findOne({email_id:req.body.email_id,password : req.body.password,}, function (err, StateList) {
          console.log(StateList);
          if(StateList == null){
             res.json({Status:"Failed",Message:"No user found", Data : {} ,Code:200});
          }else{
             res.json({Status:"Success",Message:"user_detailsModel List", Data : StateList ,Code:200});
          }


         
        });
});


router.post('/forgotPassword', function (req, res) {
        user_detailsModel.findOne({email_id:req.body.email_id}, function (err, StateList) {
          console.log(StateList);
          if(StateList == null){
          res.json({Status:"Failed", Data : "You don't Have a account, Invalid Email Id, Please Register"})
            }else{
          res.json({Status:"Success", Data : "The Password Has been Send to your Mail Id, Please Check your Mail ID" , result:StateList })
         }
        });
});








router.get('/getlist', function (req, res) {
        user_detailsModel.find({}, function (err, Functiondetails) {
          res.json({Status:"Success",Message:"user_detailsModel", Data : Functiondetails ,Code:200});
        });
});


router.post('/edit',async function (req, res) {
  var user_detail = await user_detailsModel.findOne({email_id : req.body.email_id});
        user_detailsModel.findByIdAndUpdate(user_detail._id, req.body, {new: true}, function (err, UpdatedDetails) {
            if (err) return res.json({Status:"Failed",Message:"Internal Server Error", Data : {},Code:500});
             res.json({Status:"Success",Message:"user_detailsModel Updated", Data : UpdatedDetails ,Code:200});
        });
});
// // DELETES A USER FROM THE DATABASE
router.post('/delete', function (req, res) {
      user_detailsModel.findByIdAndRemove(req.body.Activity_id, function (err, user) {
          if (err) return res.json({Status:"Failed",Message:"Internal Server Error", Data : {},Code:500});
          res.json({Status:"Success",Message:"user_detailsModel Deleted successfully", Data : {} ,Code:200});
      });
});
module.exports = router;
