var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var yantrasModel = require('./../models/yantrasModel');


router.post('/create', async function(req, res) {
  try{

        await yantrasModel.create({
            yanid : req.body.yanid,
            datas:  req.body.datas
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
      yantrasModel.remove({}, function (err, user) {
          if (err) return res.status(500).send("There was a problem deleting the user.");
             res.json({Status:"Success",Message:"yantrasModel Deleted", Data : {} ,Code:200});     
      });
});


router.post('/getlist_id', function (req, res) {
        yantrasModel.find({Person_id:req.body.Person_id}, function (err, StateList) {
          res.json({Status:"Success",Message:"State List", Data : StateList ,Code:200});
        });
});



router.get('/getlist', function (req, res) {
        yantrasModel.find({}, function (err, Functiondetails) {
          res.json({Status:"Success",Message:"Functiondetails", Data : Functiondetails ,Code:200});
        });
});


router.post('/edit', async function (req, res) {
  var yantra = await yantrasModel.findOne({yanid : req.body.yanid});
        yantrasModel.findByIdAndUpdate(yantra._id, req.body, {new: true}, function (err, UpdatedDetails) {
            if (err) return res.json({Status:"Failed",Message:"Internal Server Error", Data : {},Code:500});
             res.json({Status:"Success",Message:"Functiondetails Updated", Data : UpdatedDetails ,Code:200});
        });
});
// // DELETES A USER FROM THE DATABASE
router.post('/delete', async function (req, res) {
      await yantrasModel.findByIdAndDelete(req.body._id, function (err, yantra) {
          if (err) return res.json({Status:"Failed",Message:"Internal Server Error", Data : {},Code:500});
          res.json({Status:"Success",Message:"SubFunction Deleted successfully", Data : {} ,Code:200});
      });
});
module.exports = router;
