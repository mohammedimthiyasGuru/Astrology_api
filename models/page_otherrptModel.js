var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var page_otherrptSchema = new mongoose.Schema({  
 home_id : String,
 datas : Array
});
mongoose.model('page_otherrpt', page_otherrptSchema);
module.exports = mongoose.model('page_otherrpt');
