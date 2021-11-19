var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var termsandconModel = require('./../models/termsandconModel');


router.post('/create', async function(req, res) {
  try{

        await termsandconModel.create({
            sub_cat : req.body.sub_cat,
            datas : req.body.datas,
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
      termsandconModel.remove({}, function (err, user) {
          if (err) return res.status(500).send("There was a problem deleting the user.");
             res.json({Status:"Success",Message:"termsandconModel Deleted", Data : {} ,Code:200});     
      });
});


router.post('/getlist_id', function (req, res) {
        termsandconModel.find({Person_id:req.body.Person_id}, function (err, StateList) {
          res.json({Status:"Success",Message:"termsandconModel List", Data : StateList ,Code:200});
        });
});



router.get('/getlist', function (req, res) {
        termsandconModel.find({}, function (err, Functiondetails) {
          res.json({Status:"Success",Message:"termsandconModel", Data : Functiondetails ,Code:200});
        });
});


router.post('/edit', function (req, res) {
        termsandconModel.findByIdAndUpdate(req.body.Activity_id, req.body, {new: true}, function (err, UpdatedDetails) {
            if (err) return res.json({Status:"Failed",Message:"Internal Server Error", Data : {},Code:500});
             res.json({Status:"Success",Message:"termsandconModel Updated", Data : UpdatedDetails ,Code:200});
        });
});
// // DELETES A USER FROM THE DATABASE
router.post('/delete', function (req, res) {
      termsandconModel.findByIdAndRemove(req.body.Activity_id, function (err, user) {
          if (err) return res.json({Status:"Failed",Message:"Internal Server Error", Data : {},Code:500});
          res.json({Status:"Success",Message:"termsandconModel Deleted successfully", Data : {} ,Code:200});
      });
});
module.exports = router;
