var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var templepujaSchema = new mongoose.Schema({  
 temid : String,
 datas : Array
});
mongoose.model('templepuja', templepujaSchema);
module.exports = mongoose.model('templepuja');
