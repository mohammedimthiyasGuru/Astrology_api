var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var page_yantraSchema = new mongoose.Schema({  
 home_id : String,
 datas : Array
});
mongoose.model('page_yantra', page_yantraSchema);
module.exports = mongoose.model('page_yantra');
