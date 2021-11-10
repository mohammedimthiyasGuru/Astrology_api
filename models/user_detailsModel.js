var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var userdetailSchema = new mongoose.Schema({  
 

 dob : String,
 email_id : String,
 gender : String,
 gothram : String,
 lat : Number,
      long : Number,
       nakshatra : String,
        password : String,
         phone_numeber : String,
          placeofbirth : String,
           rashi : String,
           time : String,
           user_name : String,
           members : Array,




});
mongoose.model('userdetail', userdetailSchema);

module.exports = mongoose.model('userdetail');