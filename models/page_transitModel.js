var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var page_transitSchema = new mongoose.Schema({  
 home_id : String,
 datas : Array
});
mongoose.model('page_transit', page_transitSchema);
module.exports = mongoose.model('page_transit');
