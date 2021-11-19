var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var code_detailModel = require('./../models/code_detailModel');


router.post('/create', async function(req, res) {
  try{

        await code_detailModel.create({
            Status : req.body.Status,
            amount_INR : req.body.amount_INR,
            amount_USD : req.body.amount_USD,
            code :  req.body.code,
            date :  req.body.date,
            user_id :  req.body.user_id,
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
      code_detailModel.remove({}, function (err, user) {
          if (err) return res.status(500).send("There was a problem deleting the user.");
             res.json({Status:"Success",Message:"code_detailModel Deleted", Data : {} ,Code:200});     
      });
});


router.post('/getlist_id', function (req, res) {
        code_detailModel.find({Person_id:req.body.Person_id}, function (err, StateList) {
          res.json({Status:"Success",Message:"code_detailModel List", Data : StateList ,Code:200});
        });
});



router.get('/getlist', function (req, res) {
        code_detailModel.find({}, function (err, Functiondetails) {
          res.json({Status:"Success",Message:"code_detailModel", Data : Functiondetails ,Code:200});
        });
});


router.post('/edit', function (req, res) {
        code_detailModel.findByIdAndUpdate(req.body.Activity_id, req.body, {new: true}, function (err, UpdatedDetails) {
            if (err) return res.json({Status:"Failed",Message:"Internal Server Error", Data : {},Code:500});
             res.json({Status:"Success",Message:"code_detailModel Updated", Data : UpdatedDetails ,Code:200});
        });
});
// // DELETES A USER FROM THE DATABASE
router.post('/delete', function (req, res) {
      code_detailModel.findByIdAndRemove(req.body.Activity_id, function (err, user) {
          if (err) return res.json({Status:"Failed",Message:"Internal Server Error", Data : {},Code:500});
          res.json({Status:"Success",Message:"code_detailModel Deleted successfully", Data : {} ,Code:200});
      });
});
module.exports = router;
