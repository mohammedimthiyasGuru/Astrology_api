var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var code_detailSchema = new mongoose.Schema({  
 Status : String,
 amount_INR : String,
 amount_USD : String,
 code : String,
 date : Date,
 user_id : Array
});
mongoose.model('code_detail', code_detailSchema);

module.exports = mongoose.model('code_detail');
