var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var page_rudrakshSchema = new mongoose.Schema({  
 home_id : String,
 datas : Array
});
mongoose.model('page_rudraksh', page_rudrakshSchema);
module.exports = mongoose.model('page_rudraksh');
