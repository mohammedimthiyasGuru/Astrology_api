var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var page_templepoojaSchema = new mongoose.Schema({  
 home_id : String,
 datas : Array
});
mongoose.model('page_templepooja', page_templepoojaSchema);
module.exports = mongoose.model('page_templepooja');
