var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var subscribeModel = require('./../models/subscribeModel');


router.post('/create', async function(req, res) {
  try{

        await subscribeModel.create({
            subscri_id : req.body.subscri_id,
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
      subscribeModel.remove({}, function (err, user) {
          if (err) return res.status(500).send("There was a problem deleting the user.");
             res.json({Status:"Success",Message:"subscribeModel Deleted", Data : {} ,Code:200});     
      });
});


router.post('/getlist_id', function (req, res) {
        subscribeModel.find({Person_id:req.body.Person_id}, function (err, StateList) {
          res.json({Status:"Success",Message:"subscribeModel List", Data : StateList ,Code:200});
        });
});



router.get('/getlist', function (req, res) {
        subscribeModel.find({}, function (err, Functiondetails) {
          res.json({Status:"Success",Message:"subscribeModel", Data : Functiondetails ,Code:200});
        });
});


router.post('/edit', function (req, res) {
        subscribeModel.findByIdAndUpdate(req.body.Activity_id, req.body, {new: true}, function (err, UpdatedDetails) {
            if (err) return res.json({Status:"Failed",Message:"Internal Server Error", Data : {},Code:500});
             res.json({Status:"Success",Message:"subscribeModel Updated", Data : UpdatedDetails ,Code:200});
        });
});
// // DELETES A USER FROM THE DATABASE
router.post('/delete', function (req, res) {
      subscribeModel.findByIdAndRemove(req.body.Activity_id, function (err, user) {
          if (err) return res.json({Status:"Failed",Message:"Internal Server Error", Data : {},Code:500});
          res.json({Status:"Success",Message:"subscribeModel Deleted successfully", Data : {} ,Code:200});
      });
});
module.exports = router;
