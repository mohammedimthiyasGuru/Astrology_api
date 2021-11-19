var mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var page_marriageSchema = new mongoose.Schema({  
 home_id : String,
 datas : Array
});
mongoose.model('page_marriage', page_marriageSchema);
module.exports = mongoose.model('page_marriage');
