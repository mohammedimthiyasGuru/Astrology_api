var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var page_gemstonesSchema = new mongoose.Schema({  
 home_id : String,
 datas : Array
});
mongoose.model('page_gemstones', page_gemstonesSchema);
module.exports = mongoose.model('page_gemstones');
