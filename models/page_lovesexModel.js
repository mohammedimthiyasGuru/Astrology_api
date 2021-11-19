var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var page_lovesexSchema = new mongoose.Schema({  
 home_id : String,
 datas : Array
});
mongoose.model('page_lovesex', page_lovesexSchema);
module.exports = mongoose.model('page_lovesex');
